const int BUZZER = 13;           // Definindo o pino 13 para o buzzer (alto-falante) conectado
const int OUTPUT_PORT = 11;      // Definindo o pino 11 para um dispositivo de entrada ou controle (como um botão ou sensor)

void setup() {
  pinMode(BUZZER, OUTPUT);       // Configura o pino BUZZER como saída, já que o buzzer será controlado por ele
}

void loop() {
    // A estrutura condicional verifica o estado do pino OUTPUT_PORT
    // Se o pino OUTPUT_PORT estiver em LOW (baixo, 0V), o buzzer emite som
    if (digitalRead(OUTPUT_PORT) == LOW) {
        tone(BUZZER, 1000);   // Emite um som no pino BUZZER a 1000 Hz
        delay(500);            // Espera 500 milissegundos antes de verificar novamente o estado do OUTPUT_PORT
    }
    
    // Caso o pino OUTPUT_PORT esteja em HIGH (alto, 5V), o buzzer é desativado
    else if (digitalRead(OUTPUT_PORT) == HIGH) {
        noTone(BUZZER);       // Desliga o buzzer (sem som)
        delay(500);            // Espera 500 milissegundos antes de verificar novamente o estado do OUTPUT_PORT
    }
}