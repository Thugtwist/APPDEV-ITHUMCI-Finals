#include <WiFi.h> 
#include <Firebase_ESP_Client.h> 

// Pin Definitions 
#define GAS_SMOKE_SENSOR_PIN 33 
#define BUTTON_PIN 4 
#define BUZZER_PIN 23 

#define LED_SYSTEM_PIN 15 
#define LED_ALERT_PIN 26 

// Firebase Setup 
#include <addons/TokenHelper.h> 
#include <addons/RTDBHelper.h> 

#define WIFI_SSID "FAM" 
#define WIFI_PASSWORD "@Koreaboo07" 
#define API_KEY "AIzaSyDnfDXQcHDFzl1NGJP2TcBJ9_ZxMml_qW0" 
#define DATABASE_URL "https://group1-df27a-default-rtdb.firebaseio.com/" 

FirebaseData fbdo; 
FirebaseAuth auth; 
FirebaseConfig config; 

// Declare firebaseData globally 
FirebaseData firebaseData; 

// Timing Variables 
unsigned long previousMillis = 0; 
const unsigned long readInterval = 2000; 
bool systemOn = false; 

// System States 
enum SystemState { NORMAL, ALERT, DANGER }; 
SystemState currentState = NORMAL; 

// Thresholds (calibrate these) 
const int GAS_THRESHOLD = 600; 
const int SMOKE_THRESHOLD = 600; 

void setup() { 
  Serial.begin(115200); 

  // Connect to Wi-Fi 
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD); 
  Serial.print("Connecting to Wi-Fi"); 
  while (WiFi.status() != WL_CONNECTED) { 
    Serial.print("."); 
    delay(300); 
  } 
  Serial.println(); 
  Serial.print("Connected with IP: "); 
  Serial.println(WiFi.localIP()); 
  Serial.println(); 

  // Firebase Setup 
  config.api_key = API_KEY; 
  config.database_url = DATABASE_URL; 

  if (Firebase.signUp(&config, &auth, "", "")) { 
    Serial.println("Firebase Sign Up Successful"); 
  } else { 
    Serial.printf("%s\n", config.signer.signupError.message.c_str()); 
  } 

  config.token_status_callback = tokenStatusCallback; 
  Firebase.reconnectWiFi(true); 
  Firebase.begin(&config, &auth); 

  // Pin Setup 
  pinMode(GAS_SMOKE_SENSOR_PIN, INPUT); 
  pinMode(BUTTON_PIN, INPUT_PULLUP); 
  pinMode(LED_SYSTEM_PIN, OUTPUT); 
  pinMode(LED_ALERT_PIN, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT); 

  // Set initial LED state to OFF 
  digitalWrite(LED_SYSTEM_PIN, LOW); 
  digitalWrite(LED_ALERT_PIN, LOW); 
  digitalWrite(BUZZER_PIN, LOW); 
} 

void loop() { 
  // Handle ON/OFF button press 
  static bool buttonPressed = false; 
  if (digitalRead(BUTTON_PIN) == LOW && !buttonPressed) { 
    buttonPressed = true; 
    systemOn = !systemOn; 

    // Update system LED 
    digitalWrite(LED_SYSTEM_PIN, systemOn ? HIGH : LOW); 

    if (!systemOn) { 
      Serial.println("System Turned OFF"); 
      digitalWrite(LED_ALERT_PIN, LOW); 
      digitalWrite(BUZZER_PIN, LOW); 
      currentState = NORMAL; 
    } else { 
      Serial.println("System Turned ON"); 
    } 

    delay(200); 
  } else if (digitalRead(BUTTON_PIN) == HIGH) { 
    buttonPressed = false; 
  } 

  if (!systemOn) return; 

  // Read sensor data at defined interval 
  if (millis() - previousMillis >= readInterval) { 
    previousMillis = millis(); 
    int analogValue = analogRead(GAS_SMOKE_SENSOR_PIN); 
    Serial.printf("Analog Value: %d\n", analogValue); 

    // State machine logic 
    if (analogValue > SMOKE_THRESHOLD) { 
      currentState = DANGER; 
    } else if (analogValue >= GAS_THRESHOLD) { 
      currentState = ALERT; 
    } else { 
      currentState = NORMAL; 
    } 

    // Update alert LED and buzzer based on state 
    if (currentState == DANGER) { 
      digitalWrite(LED_ALERT_PIN, HIGH); 
      digitalWrite(BUZZER_PIN, HIGH); 
    } else if (currentState == ALERT) { 
      digitalWrite(LED_ALERT_PIN, HIGH); 
      digitalWrite(BUZZER_PIN, LOW); 
    } else { 
      digitalWrite(LED_ALERT_PIN, LOW); 
      digitalWrite(BUZZER_PIN, LOW); 
    }

    // Send data to Firebase (This part might need adjustments based on your Firebase library version)
    if (Firebase.ready()) { 
      Firebase.RTDB.setInt(&fbdo, "/sensorReading/analogValue", analogValue); 
      Firebase.RTDB.setString(&fbdo, "/sensorReading/state", 
                              currentState == NORMAL ? "Normal" : 
                              currentState == ALERT ? "Alert" : "Danger"); 
    } 
  } 
}