let MSGS = {
  '#blk-motion#': {
    en: 'Motion',
    tlh: 'mo\'Qoq',
    es: 'Movimiento',
    fr: 'Mouvement',
    el: 'Κίνηση',
    nl: 'Beweging',
    de: 'Bewegung',
    he: 'תנועה'
  },
  '#blk-motor#': {
    en: 'Motor',
    tlh: 'nguSDI\'',
    es: 'Motor',
    fr: 'Moteur',
    el: 'Κινητήρες',
    nl: 'Motor',
    de: 'Motor',
    he: 'מנוע',
  },
  '#blk-sensors#': {
    en: 'Sensors',
    tlh: 'ghe\'\'or',
    es: 'Sensores',
    fr: 'Capteurs',
    el: 'Αισθητήρες',
    nl: 'Sensoren',
    de: 'Sensor',
    he: 'חיישנים',
  },
  '#blk-sound#': {
    en: 'Sound',
    tlh: 'wab',
    es: 'Sonido',
    fr: 'Sons',
    el: 'Ήχος',
    nl: 'Geluid',
    de: 'Ton',
    he: 'צליל',
  },
  '#blk-pen-category#': {
    en: 'Pen (Experimental)',
    nl: 'Pen (Experimenteel)',
    he: 'עט'
  },
  '#blk-radio-category#': {
    en: 'Radio (Experimental)',
    nl: 'Radio (Experimenteel)',
    he: 'רדיו'
  },
  '#blk-control#': {
    en: 'Control',
    tlh: 'SeH',
    es: 'Control',
    fr: 'Contrôle',
    el: 'Έλεγχος',
    nl: 'Controle',
    de: 'Kontrolle',
    he: 'שליטה'
  },
  '#blk-logic#': {
    en: 'Logic',
    tlh: 'wanl\'',
    es: 'Logica',
    fr: 'Logique',
    el: 'Λογική',
    nl: 'Logica',
    de: 'Logik',
    he: 'היגיון'
  },
  '#blk-loops#': {
    en: 'Loops',
    tlh: 'QoQ',
    es: 'Bucles',
    fr: 'Boucles',
    el: 'Επανάληψη',
    nl: 'Lussen',
    de: 'Schleife',
    he: 'לולאות'
  },
  '#blk-math#': {
    en: 'Math',
    tlh: 'ma\'rIch',
    es: 'Matematica',
    fr: 'Maths',
    el: 'Μαθηματικά',
    nl: 'Rekenen',
    de: 'Mathematik',
    he: 'מתמטיקה'
  },
  '#blk-text#': {
    en: 'Text',
    tlh: 'wej',
    es: 'Texto',
    fr: 'Texte',
    el: 'Κείμενο',
    nl: 'Tekst',
    de: 'Text',
    he: 'טקסט'
  },
  '#blk-lists#': {
    en: 'Lists',
    tlh: 'tlhegh',
    es: 'Listas',
    fr: 'Listes',
    el: 'Λίστες',
    nl: 'Lijsten',
    de: 'Listen',
    he: 'רשימות'
  },
  '#blk-variables#': {
    en: 'Variables',
    tlh: 'qeylIS',
    es: 'Variables',
    fr: 'Variables',
    el: 'Μεταβλητές',
    nl: 'Variabelen',
    de: 'Variabeln',
    he: 'משתנים'
  },
  '#blk-functions#': {
    en: 'Functions',
    tlh: 'tlhaw\'DIyuS',
    es: 'Funciones',
    fr: 'Fonctions',
    el: 'Συναρτήσεις',
    nl: 'Functies',
    de: 'Funktionen',
    he: 'פונקציות'
  },
  '#blk-when_started#': {
    en: 'When Started',
    es: 'Al comenzar',
    fr: 'Au démarrage',
    el: 'Κατά την εκκίνηση',
    nl: 'Als gestart',
    de: 'Wenn gestartet',
    he: 'כאשר מתחיל'
  },
  '#blk-sleep_for#': {
    en: 'sleep for',
    fr: 'attendre jusqu\'à',
    el: 'περίμενε για',
    nl: 'slaap voor',
    de: 'schlafe für',
    he: 'חכה במשך'
  },
  '#blk-seconds#': {
    en: 'seconds',
    fr: 'secondes',
    el: 'δευτερόλεπτα',
    nl: 'seconden',
    de: 'Sekunden',
    he: 'שניות'
  },
  '#blk-milliseconds#': {
    en: 'milliseconds',
    fr: 'millisecondes',
    el: 'χιλιοστά του δευτερολέπτου',
    nl: 'milliseconden',
    de: 'Millisekunden',
    he: 'מילישניות'
  },
  '#blk-stop_moving_and#': {
    en: 'stop moving and',
    fr: 'arrêter d\'avancer et',
    el: 'σταμάτα την κίνηση και',
    nl: 'stop beweging en',
    de: 'stoppe Bewegung und',
    he: 'להפסיק לזוז ו'
  },
  '#blk-brake#': {
    en: 'brake',
    fr: 'freiner',
    el: 'διακοπή και έξοδος',
    nl: 'remmen',
    de: 'bremsen',
    he: '???'
  },
  '#blk-coast#': {
    en: 'coast',
    fr: 'côté',
    el: 'κύλησε',
    nl: 'uitrijden',
    de: 'rollen',
    he: '???'
  },
  '#blk-hold#': {
    en: 'hold',
    fr: 'tenir',
    el: 'ανάμεινε',
    de: 'halten',
    nl: 'wachten',
    he: 'עצור'
  },
  '#blk-stop_motor_on_port#': {
    en: 'stop motor on port',
    fr: 'arrêter le moteur sur le port',
    el: 'σταμάτα τον κινητήρα στη θύρα',
    nl: 'stop motor op poort',
    de: 'stoppe den Motor an Port',
    he: 'עפסק מנוע ביציאה'
  },
  '#blk-and#': {
    en: 'and',
    fr: 'et',
    el: 'και',
    nl: 'en',
    de: 'und',
    he: 'וגם'
  },
  '#blk-move_steering_with_direction#': {
    en: 'move steering with direction',
    fr: 'avancer dans la direction de',
    el: 'move steering με κατεύθυνση',
    nl: 'beweeg sturend met richting',
    de: 'bewege Steuerung mit der Richtung',
    he: 'הזז היגוי עם הכיוון \n'
  },
  '#blk-and_speed#': {
    en: 'and speed',
    fr: 'et vitesse',
    el: 'και ταχύτητα',
    nl: 'en snelheid',
    de: 'und Geschwindigkeit',
    he: 'וגם מהירות'
  },
  '#blk-degrees#': {
    en: 'degrees',
    fr: 'degrés',
    el: 'μοίρες',
    nl: 'graden',
    de: 'Grad',
    he: 'מעלות'
  },
  '#blk-rotations#': {
    en: 'rotations',
    fr: 'rotations',
    el: 'περιστροφές',
    nl: 'rotaties',
    de: 'Rotation',
    he: 'סיבובים'
  },
  '#blk-move_steering_tooltip#': {
    en: 'direction ranges from -100 (left) to 0 (straight) to 100 (right)',
    fr: 'direction comprise entre -100 (gauche), par 0 (tout droit), à 100 (droite)',
    el: 'η κατεύθυνση κυμαίνεται από -100 (αριστερά), έως 0 (ευθεία), έως 100 (δεξιά)',
    nl: 'Richting ligt van -100 (linksaf) en 0 (rechtdoor) tot 100 (rechtsaf)',
    de: 'Die Lenkung geht von -100 (links) zu 0 (gerade) zu 100 (rechts)',
    he: 'כיוון עם טווח בין -100 (שמאל) ל0 (ישר) ועד 100 (ימינה)'
  },
  '#blk-for#': {
    en: 'for',
    fr: 'pour',
    el: 'για',
    nl: 'voor',
    de: 'für',
    he: 'עבור'
  },
  '#blk-exit_program#': {
    en: 'exit program',
    fr: 'sortie du programme',
    el: 'Τερματισμός προγράμματος',
    nl: 'programma stoppen',
    de: 'beende Programm',
    he: 'צא מהתוכנית'
  },
  '#blk-position_of_motor_on_port#': {
    en: 'position of motor on port',
    fr: 'position du moteur sur le port',
    el: 'θέση του κινητήρα στη θύρα',
    nl: 'positie van motor op poort',
    de: 'Position des Motors an dem Port',
    he: 'מיקום המנוע ביציאה'
  },
  '#blk-in_degrees#': {
    en: 'in degrees',
    fr: 'en degrés',
    el: 'σε μοίρες',
    nl: 'in graden',
    de: 'in Grad',
    he: 'במעלות'
  },
  '#blk-speed_of_motor_on_port#': {
    en: 'speed of motor on port',
    fr: 'vitesse du moteur sur le port',
    el: 'ταχύτητα του κινητήρα στη θύρα',
    nl: 'snelheid van motor op poort',
    de: 'Geschwindigkeit des Motors an dem Port',
    he: 'מהירות במנוע ביציאה'
  },
  '#blk-reset_position_of_motor_on_port#': {
    en: 'reset position of motor on port',
    fr: 'réintialiser la position du moteur sur le port',
    el: 'επαναφορά της θέσης του κινητήρα στη θύρα',
    nl: 'reset positie van motor op poort',
    de: 'setzte Position des Motors zurück an dem Port',
    he: 'אתחל מיקום של מנוע ביציאה'
  },
  '#blk-both_wheels#': {
    en: 'Both wheels',
    fr: 'toutes les roues',
    el: 'Και οι δύο ρόδες',
    nl: 'beide wielen',
    de: 'beide Räder',
    he: 'שני הגלגלים'
  },
  '#blk-left_wheel#': {
    en: 'Left Wheel',
    fr: 'roue gauche',
    el: 'Αριστερή ρόδα',
    nl: 'linker wiel',
    de: 'linkes Rad',
    he: 'גלגל שמאלי'
  },
  '#blk-right_wheel#': {
    en: 'Right Wheel',
    fr: 'roue droite',
    el: 'Δεξιά ρόδα',
    nl: 'rechter wiel',
    de: 'rechtes Rad',
    he: 'גלגל ימני'
  },
  '#blk-move_tank_with_left_speed#': {
    en: 'move tank with left speed',
    fr: 'avancer le tank avec une vitesse à gauche de',
    el: 'move tank με αριστερή ταχύτητα',
    nl: 'beweeg tank met linker snelheid',
    de: 'bewege den Panzer mit einer linken Geschwindigkeit',
    he: 'הנעת טנק עם מהירות בצד שמאל'
  },
  '#blk-and_right_speed#': {
    en: 'and right speed',
    fr: 'et une vitesse à droite de',
    el: 'και δεξιά ταχύτητα',
    nl: 'en rechter snelheid',
    de: 'und rechte Geschwindigkeit',
    he: 'וגם מהירות בצד ימין'
  },
  '#blk-touch_sensor#': {
    en: 'touch_sensor',
    nl: 'drukknop sensor',
    de: 'Berührungssensor',
    he: 'חיישן_מגע'
  },
  '#blk-wait_until_touch_sensor#': {
    en: 'wait until touch_sensor',
    nl: 'wacht tot drukknop sensor',
    de: 'warte bis der Berührungssensor',
    he: 'חכה עד חיישן_מגע'
  },
  '#blk-is_pressed#': {
    en: 'is Pressed',
    nl: 'is ingedrukt',
    de: 'ist gedrückt',
    he: 'לחוץ'
  },
  '#blk-is_released#': {
    en: 'is Released',
    nl: 'is losgelaten',
    de: 'ist losgelassen',
    he: 'משוחרר'
  },
  '#blk-is_bumped#': {
    en: 'is Bumped',
    nl: 'is in-uitgedrukt',
    de: 'ist angestoßen',
    he: 'נלחץ זמנית'
  },
  '#blk-send_message#': {
    en: 'Send message to',
    nl: 'stuur bericht naar',
    de: 'sende Nachricht an',
    he: 'שלח מסר אל'
  },
  '#blk-via_mailbox#': {
    en: 'via mailbox',
    nl: 'via postvak',
    de: 'über Mailbox',
    he: 'דרך תיבת הדואר'
  },
  '#blk-robot#': {
    en: 'robot',
    nl: 'robot',
    de: 'Roboter',
    he: 'רובוט'
  },
  '#blk-team_mates#': {
    en: 'team mates',
    nl: 'team-leden',
    de: 'Teammitglieder',
    he: 'חברי קבוצה'
  },
  '#blk-all#': {
    en: 'all',
    nl: 'allemaal',
    de: 'alle',
    he: 'כולם'
  },
  '#blk-messages_available#': {
    en: 'number of messages in mailbox',
    nl: 'aantal berichten in postvak',
    de: 'Anzahl an Nachrichten in der Mailbox',
    he: 'מספר ההודעות בתיבת הדואר'
  },
  '#blk-read_message#': {
    en: 'read next message in mailbox',
    nl: 'lees volgende bericht in postvak',
    de: 'lese nächste Narichten in der Mailbox',
    he: 'קרא הודעה הבאה בתיבת הדואר'
  },
  '#blk-read_content#': {
    en: 'read content of next message in mailbox',
    nl: 'lees inhoud van volgende bericht in postvak',
    de: 'lese den Inhalt der nächsten Nachricht in der Mailbox',
    he: 'קרא תוכן הודעה הבאה בתיבת הדואר'
  },
  '#blk-empty_mailbox#': {
    en: 'empty mailbox',
    nl: 'postvak legen',
    de: 'leere Mailbox',
    he: 'נקה את תיבת הדואר'
  },
  '#blk-radio_send_tooltip#': {
    en: 'Any type of messages can be sent, including numbers, text, and lists',
    nl: 'Ieder type bericht kan gestuurd worden, inclusief nummers, tekst en lijsten',
    de: 'Jede Art einer Nachricht kann gesendet werdem, sowie Zahlen, Text und Listen',
    he: 'איזה סוג של הודעה יכול להישלח, כולל מספרים, טקסט ורשימות'
  },
  '#blk-radio_read_tooltip#': {
    en: 'Returns the oldest message and remove it from the mailbox. Return value is a list containing both the message content and the sender id.',
    nl: 'Geeft het oudste bericht weer en verwijdert het uit het postvak. Weergegeven waarde is een lijst met zowel de berichtinhoud als de ID van de verzender.',
    de: 'Sendet die älteste Naricht zurück und entfernt sie von der Mailbox. Der zurückgegebene Wert ist eine Liste mit dem Inhalt der Naricht und die ID des Absenders.',
    he: '????'
  },
  '#blk-radio_read_content_tooltip#': {
    en: 'Returns the oldest message and remove it from the mailbox. Return value contains only the message content.',
    nl: 'Geeft het oudste bericht weer en verwijdert het uit het postvak. Weergegeven waarde bevat enkel de berichtinhoud.',
    de: 'Sendet die älteste Naricht zurück und entfernt sie von der Mailbox. Der zurückgegebene Wert ist der Inhalt der Nachricht.',
    he: '????'
  },
  '#blk-color_sensor#': {
    en: 'color_sensor',
    fr: 'capteur de couleurs',
    el: 'αισθητήρας χρώματος',
    nl: 'kleurensensor',
    de: 'Farbensensor',
    he: 'חיישן צבע'
  },
  '#blk-on_port#': {
    en: 'on port',
    fr: 'sur le port',
    el: 'στην θύρα',
    nl: 'op poort',
    de: 'an dem Port',
    he: 'ביציאה'
  },
  '#blk-reflected_light_intensity#': {
    en: 'reflected light intensity',
    fr: 'intensité lumineuse réfléchie',
    el: 'ένταση αντανακλώμενου φωτός',
    nl: 'intensiteit gereflecteerd licht',
    de: 'reflektierte Lichtintensitaet',
    he: 'עוצמת אור חוזר'
  },
  '#blk-color#': {
    en: 'color',
    fr: 'couleur',
    el: 'χρώμα',
    nl: 'kleur',
    de: 'Farbe',
    he: 'צבע'
  },
  '#blk-color_name#': {
    en: 'color name',
    fr: 'nom de la couleur',
    el: 'όνομα χρώματος',
    nl: 'kleurnaam',
    de: 'Farbenname',
    he: 'שם צבע'
  },
  '#blk-red#': {
    en: 'red',
    fr: 'rouge',
    el: 'κόκκινο',
    nl: 'rood',
    de: 'rot',
    he: 'אדום'
  },
  '#blk-green#': {
    en: 'green',
    fr: 'vert',
    el: 'πράσινο',
    nl: 'groen',
    de: 'gruen',
    he: 'ירוק'
  },
  '#blk-blue#': {
    en: 'blue',
    fr: 'bleu',
    el: 'μπλε',
    nl: 'blauw',
    de: 'blau',
    he: 'כחול'
  },
  '#blk-rgb#': {
    en: 'rgb (list)',
    fr: 'rvb (liste)',
    el: 'rgb (Λίστα)',
    nl: 'rgb (lijst)',
    de: 'rgb(Liste)',
    he: 'רשימת RGB'
  },
  '#blk-ultrasonic_distance_on_port#': {
    en: 'ultrasonic distance on port',
    fr: 'télémètre à ultrasons sur le port',
    el: 'αισθητήρας απόστασης υπερήχων στην θύρα',
    nl: 'ultrasonische afstand op poort',
    de: 'Ultraschalldistanz am Port',
    he: 'מרחק אולטרסוניק ביציאה'
  },
  '#blk-laser_distance_on_port#': {
    en: 'laser distance on port',
    nl: 'laser afstand op poort',
    he: 'מרחק לייזר ביציאה'
  },
  '#blk-in#': {
    en: 'in',
    fr: 'entrée',
    el: 'σε',
    nl: 'in',
    de: 'in',
    he: 'בתוך'
  },
  '#blk-gyro#': {
    en: 'gyro',
    fr: 'gyroscope',
    el: 'γυροσκόπιο',
    nl: 'gyroscoop',
    de: 'Gyroskop',
    he: 'ג'יירו'
  },
  '#blk-angle#': {
    en: 'angle',
    fr: 'angle',
    el: 'γωνία',
    nl: 'hoek',
    de: 'Winkel',
    he: 'זווית'
  },
  '#blk-rate#': {
    en: 'rate',
    fr: 'cadence',
    el: 'ρυθμός',
    nl: 'bochtscherpte',
    de: 'Rate',
    he: '???'
  },
  '#blk-reset_gyro_on_port#': {
    en: 'reset gyro on port',
    fr: 'réinitialiser le gyroscope sur le port',
    el: 'επαναφορά γυροσκόπιου στη θύρα',
    nl: 'reset gyroscoop op poort',
    de: 'setze Gyroskop zurück am Port',
    he: 'אתחל ג'יירו ביציאה'
  },
  '#blk-run_motor_on_port#': {
    en: 'run motor on port',
    fr: 'faire tourner le moteur sur le port',
    el: 'ξεκίνα τον κινητήρα στη θύρα',
    nl: 'start motor op poort',
    de: 'nutze den Motor am Port',
    he: 'הפעל מנוע ביציאה'
  },
  '#blk-at#': {
    en: 'at',
    fr: 'à',
    el: 'στο',
    nl: 'op',
    de: 'bei',
    he: 'ב'
  },
  '#blk-run_motor_tooltip#': {
    en: 'motor will continue running until given a different command',
    fr: 'le moteur va continuer de tourner tant qu\'il n\'y a pas de nouvelle commande',
    el: 'ο κινητήρας θα συνεχίσει να λειτουργεί μέχρι να δοθεί διαφορετική εντολή',
    nl: 'Motor zal continue draaien totdat een ander commando wordt gegeven',
    de: 'Motor wird sich weiter bewegen bis ein anderes Kommando gegeben wird',
    he: '????'
  },
  '#blk-to_position#': {
    en: 'to position',
    fr: 'à la position',
    el: 'στη θέση',
    nl: 'naar positie',
    de: 'zur Position',
    he: 'במיקום'
  },
  '#blk-say#': {
    en: 'say',
    fr: 'dire',
    el: 'πες',
    nl: 'zeg',
    de: 'sag',
    he: 'אמור'
  },
  '#blk-and_dont_wait#': {
    en: 'and don\'t wait',
    fr: 'et ne pas attendre',
    el: 'και μην περιμένεις',
    nl: 'en wacht niet',
    de: 'und warte nicht',
    he: 'ואל תחכה'
  },
  '#blk-and_wait#': {
    en: 'and wait for completion',
    fr: 'et attendre jusqu\'à la fin',
    el: 'και περίμενε να ολοκληρωθεί',
    nl: 'en wacht tot afgespeeld',
    de: 'und warte auf Fertigstellung',
    he: 'וחכה לסיום'
  },
  '#blk-say_tooltip#': {
    en: 'Speak the string using text-to-speech',
    fr: 'Prononce la phrase par la synthèse vocale',
    el: 'Εκφώνησε τη φράση χρησιμοποιόντας μετατροπή κειμένου σε ομιλία',
    nl: 'Spreek de tekst uit d.m.v. tekst-naar-spraak',
    de: 'Spreche den Satz in dem du Text zu Rede benutzt',
    he: 'אמור את המחרוזת בעזרת טקסט-לדיבור'
  },
  '#blk-beep#': {
    en: 'beep',
    fr: 'bippe',
    el: 'μπιπ',
    nl: 'bliep',
    de: 'Piep',
    he: 'ביפ'
  },
  '#blk-play_tone_at#': {
    en: 'play tone at',
    fr: 'jouer le ton à',
    el: 'αναπαραγωγή τόνου σε συχνότητα',
    nl: 'speel toon op',
    de: 'spiele den Ton bei ',
    he: 'נגד צליל ב'
  },
  '#blk-time#': {
    en: 'time',
    fr: 'temps',
    el: 'χρόνος',
    nl: 'tijd',
    de: 'Zeit',
    he: 'זמן'
  },
  '#blk-time_tooltip#': {
    en: 'Current Unix time in seconds',
    fr: 'Actuel temps Unix en secondes',
    el: 'Τρέχων χρόνος Unix σε δευτερόλεπτα',
    nl: 'Huidige Unix tijd in seconden',
    de: 'aktuelle Unix Zeit in Sekunden',
    he: '????'
  },
  '#blk-altitude#': {
    en: 'altitude',
    fr: 'altitude',
    el: 'υψόμετρο',
    nl: 'hoogte',
    de: 'Hoehe',
    he: 'גובה'
  },
  '#blk-position#': {
    en: 'position (list)',
    fr: 'position (liste)',
    el: 'θέση (λίστα)',
    nl: 'positie (lijst)',
    de: 'position(Liste)',
    he: 'מיקום (רשימה)'
  },
  '#blk-gps_tooltip#': {
    en: 'Virtual sensor that provides the robot\'s position',
    fr: 'Capteur virtuel de position du robot',
    el: 'Εικονικός αισθητήρας που παρέχει την θέση του ρομπότ',
    nl: 'Virtuele sensor die de positie van de robot aanduidt',
    de: 'virtueller Sensor welcher die Position des Roboters festlegt',
    he: '????'
  },
  '#blk-pen_down#': {
    en: 'start drawing with pen',
    nl: 'begin tekenen met pen',
    de: 'starte malen mit dem Stift',
    he: 'התחל ציור עם עט'
  },
  '#blk-pen_up#': {
    en: 'stop drawing with pen',
    nl: 'stop tekenen met pen',
    de: 'beende malen mit dem Stift',
    he: 'עצור ציור עם עט'
  },
  '#blk-pen_color#': {
    en: 'set the pen color to',
    nl: 'zet de penkleur op',
    de: 'setze die Stiftfarbe zu',
    he: 'קבע צבע עט ל'
  },
  '#blk-pen_width#': {
    en: 'set the pen width to',
    nl: 'zet de pendikte op',
    de: 'setze die Stiftnreite zu',
    he: 'קבע עובי עט ל'
  },
  '#main-blocks#': {
    en: 'Blocks',
    tlh: 'Porgh',
    es: 'Bloques',
    fr: 'Blocs',
    el: 'Μπλοκ',
    nl: 'Blokken',
    de: 'Blöcke',
    he: 'בלוקים'
  },
  '#main-sim#': {
    en: 'Simulator',
    tlh: 'ghertlhuD',
    es: 'Simulador',
    fr: 'Simulateur',
    el: 'Προσομοιωτής',
    nl: 'Simulator',
    de: 'Simulator',
    he: 'סימולטור',
  },
  '#main-file#': {
    en: 'File',
    tlh: 'teywI\'',
    es: 'Archivo',
    fr: 'Fichier',
    el: 'Αρχείο',
    nl: 'Bestand',
    de: 'Datei',
    he: 'קובץ',
  },
  '#main-new_program#': {
    en: 'New Program',
    fr: 'Nouveau programme',
    el: 'Νέο πρόγραμμα',
    nl: 'Nieuw programma',
    de: 'neues Programm',
    he: 'תוכנה חדשה'
  },
  '#main-load_blocks#': {
    en: 'Load blocks from your computer',
    fr: 'Téléverser une sauvegarde depuis l\'ordinateur',
    el: 'Φόρτωση μπλοκ από τον υπολογιστή σας',
    nl: 'Laad blokken vanaf de computer',
    de: 'Lade Blöcke von deinem Computer',
    he: 'טען בלוקים מהמחשב שלך'
  },
  '#main-import_functions#': {
    en: 'Import functions from blocks file',
    fr: 'Importer une fonction depuis une sauvegarde',
    el: 'Εισαγωγή συναρτήσεων από αρχείο μπλοκ',
    nl: 'Importeer functies van blokkenbestand',
    de: 'Importiere Funktionen von Blöckedatei',
    he: 'טען פונקציות מקובץ בלוקים'
  },
  '#main-save_blocks#': {
    en: 'Save blocks to your computer',
    fr: 'Télécharge une sauvegarde',
    el: 'Αποθηκεύστε μπλοκ στον υπολογιστή σας',
    nl: 'Sla blokken op op de computer',
    de: 'Speichere Blöcke auf deinem Computer',
    he: 'שמור קובץ בלוקים'
  },
  '#main-load_python#': {
    en: 'Load Python from your computer',
    fr: 'Téléverser un script Python depuis l\'ordinateur',
    el: 'Φόρτωση αρχείου Python από τον υπολογιστή σας',
    nl: 'Laad Python vanaf de computer',
    de: 'Öffne Python von deinem Computer',
    he: 'טען קובץ פייתון'
  },
  '#main-save_python#': {
    en: 'Save Python to your computer',
    fr: 'Télécharge le script Python',
    el: 'Αποθηκεύστε το αρχείο Python στον υπολογιστή σας',
    nl: 'Sla Python op op de computer',
    de: 'Speichere Python auf deinem Computer',
    he: 'שמור קובץ פייתון'
  },
  '#main-load_python_lib#': {
    en: 'Load Python module from your computer',
    nl: 'Laad Python module vanaf de computer',
    de: 'Lade Pythonmodule von deinem PC',
    he: 'טען מודול פייתון'
  },
  '#main-save_python_lib#': {
    en: 'Save Python module to your computer',
    nl: 'Sla Python module op op de computer',
    de: 'Speicher Pythonmodule auf deinen PC',
    he: 'שמור מודול פייתון'
  },
  '#main-export_zip#': {
    en: 'Export zip package to your computer',
    fr: 'Exporter une archive zip',
    el: 'Εξαγωγή αρχείου zip στον υπολογιστή σας',
    nl: 'Exporteer zip bestand naar de computer',
    de: 'Exportiere eine zip Datei auf deinen Computer',
    he: 'הוצע כZIP'
  },
  '#main-start_new_warning#': {
    en: 'Starting a new program will cause all unsaved work to be lost.',
    fr: 'Commencer un nouveau programme fera perdre tout le travail non sauvegardé.',
    el: 'Η δημιουργία ενός νέου προγράμματος θα προκαλέσει απώλεια όλων των μη αποθηκευμένων εργασιών.',
    nl: 'Een nieuw programma starten zal leiden tot het verlies van onopgeslagen werk.',
    de: 'WEnn du ein neues Programm beginnst, werden alle nicht gespeicherten Inhalte gelöscht',
  },
  '#main-functions_imported': {
    en: 'Functions imported',
    fr: 'Fonctions importées',
    el: 'Η συναρτήσεις εισήχθησαν',
    nl: 'Functies geïmporteerd',
    de: 'Importiere Funktionen',
    he: 'פונקציות נטענו'
  },
  '#main-robot#': {
    en: 'Robot',
    tlh: 'qoq',
    es: 'Robot',
    fr: 'Robot',
    el: 'Ρομπότ',
    nl: 'Robot',
    de: 'Roboter',
    he: 'רובוט'
  },
  '#main-select_robot#': {
    en: 'Select Robot',
    fr: 'Sélectionner un robot',
    el: 'Επιλέξτε Ρομπότ',
    nl: 'Selecteer robot',
    de: 'ausgewählter Roboter',
    he: 'בחר רובוט'
  },
  '#main-robot_configurator#': {
    en: 'Robot Configurator',
    fr: 'Configurateur de robot',
    el: 'Διαμορφωτής ρομπότ',
    nl: 'Robot configurator',
    de: 'Roboterkonfigurator',
    he: 'קונפיגורטור הרובוט'
  },
  '#main-robot_load_file#': {
    en: 'Load from file',
    fr: 'Ouvrir un fichier',
    el: 'Φόρτωση από αρχείο',
    nl: 'Laden van bestand',
    de: 'Öffne eine Datei',
    he: 'טען מקובץ'
  },
  '#main-robot_save_file#': {
    en: 'Save to file',
    fr: 'Enregistrer dans un fichier',
    el: 'Αποθήκευση σε αρχείο',
    nl: 'Opslaan naar bestand',
    de: 'Speichern unter',
    he: 'שמור לקובץ'
  },
  '#main-display_position#': {
    en: 'Display current position',
    fr: 'Afficher la position actuelle',
    el: 'Εμφάνιση τρέχουσας θέσης',
    nl: 'Toon huidige positie',
    de: 'zeige die aktuelle Position an',
    he: 'הצג מיקום נוכחי'
  },
  '#main-save_position#': {
    en: 'Save current position to settings',
    fr: 'Sauvegarder la position actuelle comme paramètre',
    el: 'Αποθηκεύση της τρέχουσας θέσης στις ρυθμίσεις',
    nl: 'Sla huidige positie op naar instellingen',
    de: 'Speichere die aktuelle Position in den Einstellungen',
    he: 'שמור מיקום נוכחי להגדרות'
  },
  '#main-clear_position#': {
    en: 'Clear position in settings',
    fr: 'Réinitialiser la position dans les paramètres',
    el: 'Εκκαθάριση θέσης από τις ρυθμίσεις',
    nl: 'Schoon positie op in instellingen',
    de: 'Lösche die Positionen in den Einstellungen',
    he: 'נקה מיקום בהגדרות'
  },
  '#main-robot_position#': {
    en: 'Robot Position',
    fr: 'Position du robot',
    el: 'Θέση ρομπότ',
    nl: 'Robot positie',
    de: 'Position des Roboters',
    he: 'מיקום הרובוט'
  },
  '#main-position#': {
    en: 'Position',
    fr: 'Position',
    el: 'Θέση',
    nl: 'Positie',
    de: 'Position',
    he: 'מיקום'
  },
  '#main-rotation#': {
    en: 'Rotation',
    fr: 'Rotation',
    el: 'Περιστροφή',
    nl: 'Rotatie',
    de: 'Rotation',
    he: 'כיוון'
  },
  '#main-degrees#': {
    en: 'degrees',
    fr: 'degrés',
    el: 'μοίρες',
    nl: 'graden',
    de: 'Grad',
    he: 'מעלות'
  },
  '#main-cannot_save_position#': {
    en: 'Current world doesn\'t allow saving of position',
    fr: 'L\'univers actuel ne permet pas de sauvegarder la position',
    el: 'Ο τρέχων κόσμος δεν επιτρέπει την αποθήκευση της θέσης',
    nl: 'Huidige wereld laat opslaan van positie niet toe',
    de: 'Die aktuelle Umgebung erlaubt das Sichern der Position nicht',
    he: 'עולם נוכחי לא מאפשר שמירת מיקום'
  },
  '#main-cannot_save_rotation#': {
    en: 'Current world doesn\'t allow saving of rotation',
    fr: 'L\'univers actuel ne permet pas de sauvegarder la rotation',
    el: 'Ο τρέχων κόσμος δεν επιτρέπει την αποθήκευση της περιστροφής',
    nl: 'Huidige wereld laat opslaan van rotatie niet toe',
    de: 'Die aktuelle Umgebung erlaubt das Sichern der Rotation nicht',
    he: 'עולם נוכחי לא מאפשר שמירת כיוון'
  },
  '#main-arena#': {
    en: 'Arena',
    tlh: '\'anSa\'',
    es: 'Pista',
    fr: 'Arène',
    el: 'Αρένα',
    nl: 'Arena',
    de: 'Arena',
    he: 'זירה'
  },
  '#main-help#': {
    en: 'Help',
    tlh: 'QaH',
    es: 'Ayuda',
    fr: 'Aide',
    el: 'Βοήθεια',
    nl: 'Help',
    de: 'Hilfe',
    he: 'עזרה'
  },
  '#main-about#': {
    en: 'About',
    fr: 'À propos',
    el: 'Σχετικά με',
    nl: 'Over',
    de: 'Über',
    he: 'אודות'
  },
  '#main-arenaTitle#': {
    en: 'GearsBot Arena',
    tlh: 'GearsBot \'anSa\'',
    es: 'Pista GearsBot',
    fr: 'Arène GearsBot',
    el: 'Αρένα GearsBot',
    nl: 'Gearsbot Arena',
    de: 'GearsBot Arena',
    he: 'זירת GearsBot'
    },
  '#main-arenaDescription#': {
    en:
      '<p>The GearsBot Arena allows up to 4 robots to compete or cooperate with each other.</p>' +
      '<p>Program your robot using the normal GearsBot page (...where you are now), and export your program and robot as a zip package (Files -> Export Zip...).' +
      'You can then load the zip package into the GearsBot Arena and run it against other players.</p>',
    tlh:
      '<p>veSDuj Data\' \'e\' vIQoy.</p>' +
      '<p>tugh tlhIHtaHghach chutmey pabnIS. chol *ma\'rIgharet*, qaSpa\' je tlhIH.' +
      'tIqDu\'lIjDaq yIlan.</p>',
    es:
      '<p>La Pista GearsBot permite hasta 4 robots para competir o colaborar uno con el otro.</p>' +
      '<p>Programa tu robot usando la página principal de GearsBot (...donde te encuentras ahora), y exporta tu programa y robot como un archivo zip. (Archivo -> Exportar Zip...).' +
      'Entonces puedes cargar el archivo zip en la Pista GearsBot y ejecutarlo contra otros jugadores.</p>',
    fr:
      '<p>L\'arène GearsBot permet de faire collaborer ou de s\'affronter jusqu\'à 4 robots simultanément.</p>' +
      '<p>Programmez votre robot depuis la page principale (...celle-ci donc), puis exportez votre programme et votre robot comme un paquet zip (Fichier -> Export Zip...).' +
      'Vous pouvez charger le paquet zip dans l\'arène GearsBot et le lancer contre les autres joueurs.</p>',
    el:
      '<p>Η Αρένα GearsBot επιτρέπει έως και 4 ρομπότ να ανταγωνίζονται ή να συνεργάζονται μεταξύ τους.</p>' +
      '<p>Προγραμματίστε το ρομπότ σας χρησιμοποιώντας την κανονική σελίδα GearsBot (... όπου βρίσκεστε τώρα) και εξαγάγετε το πρόγραμμα και το ρομπότ σας ως αρχείο zip (Αρχεία -> Εξαγωγή αρχείου zip...).' +
      'Στη συνέχεια, μπορείτε να φορτώσετε το αρχείο zip στην Αρένα GearsBot ώστε να διαγωνιστεί εναντίον άλλων παικτών.</p>',
    nl:
      '<p>De Gearsbot Arena laat tot vier robots met elkaar concureren of samenwerken.</p>' +
      '<p>Programmeer je robot met de Gearsbot pagina (waar je nu bent) en exporteer je programmma en robot naar een zip bestand (Bestand -> Exporteer zip...).' +
      'Je kunt dan het zip bestand inladen in de Gearsbot Arena en tegelijk laten werken met andere spelers.</p>',
    de:
      '<p>Die GearsBot-Arena erlaubt es mit bis zu 4 Robotern zu kämpfen oder zusammenzuarbeiten.</p>' +
      '<p>Programmiere deinen Roboter mit der normalen GearsBot-Seite (... wo du gerade bist), und exportiere dein Programm und Roboter als zip-Packet (Datei -> Exportiere Zip...).' +
      'Dann kannst du das zip-Packet in die GearsBot-Arena laden um es gegen andere Spieler antreten zu lassen.</p>',
  },
  '#main-arenaGo#': {
    en: 'Go to Arena',
    tlh: 'yIghoS',
    es: 'Ir a la Pista',
    fr: 'En route pour l\'arène',
    el: 'Μετάβαση στην Αρένα',
    nl: 'Ga naar arena',
    de: 'Gehe zur Arena',
    he: 'גש לזירה'
  },
  '#main-configurator_title#': {
    en: 'GearsBot Robot Configurator',
    fr: 'GearsBot configurateur de robot',
    el: 'Διαμορφωτής ρομπότ GearsBot',
    nl: 'GearsBot Robot Configurator',
    de: 'GearsBot Roboterkonfigurator',
  },
  '#main-configurator_description#': {
    en:
      '<p>The GearsBot Robot Configurator allows you to customize an existing robot or create a new robot design.</p>' +
      '<p>After you have completed your customization, save your creation to file and return here to load it.</p>',
    fr:
      '<p>Le configurateur de robot GearsBot permet de personnaliser un robot déjà existant ou d\'en créer un nouveau.</p>' +
      '<p>Quand votre personnalisation est finie, sauvegardez votre création dans un fichier et revenez ici pour le charger.</p>',
    el:
      '<p>Ο διαμορφωτής ρομπότ GearsBot σάς επιτρέπει να προσαρμόσετε ένα υπάρχον ρομπότ ή να δημιουργήσετε ένα νέο σχέδιο ρομπότ.</p>' +
      '<p>Αφού ολοκληρώσετε τις προσαρμογές σας, αποθηκεύστε τη δημιουργία σας σε ένα αρχείο και επιστρέψτε εδώ για να την φορτώσετε.</p>',
    nl:
      '<p>De GearsBot Robot Configurator laat je een bestaande robot aanpassen of een nieuwe robot ontwerpen.</p>' +
      '<p>Nadat je klaar bent met aanpassen, sla je de creatie op in een bestand en laad je het hier weer in.</p>',
    de:
      '<p>Der GearsBot Roboterkonfigurator erlaubt es dir einen bereits vorhandenen Roboter oder einen neuen Roboter anzupassen.</p>' +
      '<p>Nachdem du deine Anpassung beendet hast, speicher deine Kreation zu einer Datei und komme zurück um sie zu laden</p>',
  },
  '#main-configurator_go#': {
    en: 'Go to Configurator',
    fr: 'Aller au configurateur',
    el: 'Μεταβείτε στον διαμορφωτή',
    nl: 'Ga naar de Configurator',
    de: 'Gehe zum Konfigurator',
    he: 'לך לקונפיגורטור'
  },
  '#sim-world#': {
    en: 'World',
    fr: 'Univers',
    el: 'Κόσμος',
    nl: 'Wereld',
    de: 'Welt',
    he: 'עולם'
  },
  '#sim-reset#': {
    en: 'Reset',
    fr: 'Réinitialisation',
    el: 'Επαναφορά',
    nl: 'Reset',
    de: 'Zurücksetzen',
    he: 'אתחל'
  },
  '#sim-sensors#': {
    en: 'Sensors',
    fr: 'Capteurs',
    el: 'Αισθητήρες',
    nl: 'Sensoren',
    de: 'Sensoren',
    he: 'חיישנים'
  },
  '#sim-follow#': {
    en: 'Follow',
    fr: 'Suivre',
    el: 'Ακολούθησε',
    nl: 'Volgen',
    de: 'Folgen',
    he: 'עקוב'
  },
  '#sim-top#': {
    en: 'Top',
    fr: 'Haut',
    el: 'Κάτοψη',
    nl: 'Van boven',
    de: 'Oben',
    he: 'מבט על'
  },
  '#sim-arc#': {
    en: 'Arc',
    fr: 'Arc',
    el: 'Υπο γωνεία',
    nl: 'Draaien',
    de: 'Bogen',
    he: 'מבט בזווית'
  },
  '#sim-alt#': {
    en: 'Alt', // Short for altitude
    fr: 'Altitude',
    el: 'Υψόμετρο',
    nl: 'Hoogte',
    de: 'Höhe',
    he: '???'
  },
  '#sim-distance#': {
    en: 'Distance',
    fr: 'Distance',
    el: 'Απόσταση',
    nl: 'Afstand',
    de: 'Distanz',
    he: 'מרחק'
  },
  '#sim-angle#': {
    en: 'Angle',
    fr: 'Angle',
    el: 'Γωνία',
    nl: 'Hoek',
    de: 'Winkel',
    he: 'זווית (מעלות)'
  },
  '#sim-color_sensor#': {
    en: 'Color Sensor',
    fr: 'Capteur de couleur',
    el: 'Αισθητήρας χρώματος',
    nl: 'Kleurensensor',
    de: 'Farbsensor',
    he: 'חיישן צבע'
  },
  '#sim-red#': {
    en: 'Red',
    fr: 'Rouge',
    el: 'Κόκκινο',
    nl: 'Rood',
    de: 'Rot',
    he: 'אדום'
  },
  '#sim-green#': {
    en: 'Green',
    fr: 'Vert',
    el: 'Πράσινο',
    nl: 'Groen',
    de: 'Grün',
    he: 'ירוק'
  },
  '#sim-blue#': {
    en: 'Blue',
    fr: 'Bleu',
    el: 'Μπλε',
    nl: 'Blauw',
    de: 'Blau',
    he: 'כחול'
  },
  '#sim-intensity#': {
    en: 'Intensity (%)',
    fr: 'Intensité (%)',
    el: 'Ενταση (%)',
    nl: 'Intensiteit',
    de: 'Intensität (%)',
    he: 'עוצמה (%)',
  },
  '#sim-ultrasonic#': {
    en: 'Ultrasonic Sensor',
    fr: 'Télémètre à ultrasons',
    el: 'Αισθητήρας υπερήχων',
    nl: 'Ultrasonische Sensor',
    de: 'Ultraschallsensor',
    he: 'חיישן אולטרסוניק'
  },
  '#sim-distance#': {
    en: 'Distance',
    fr: 'Distance',
    el: 'Απόσταση',
    nl: 'Afstand',
    de: 'Distanz',
  },
  '#sim-gyro#': {
    en: 'Gyro Sensor',
    fr: 'Gyroscope',
    el: 'Γυροσκόπιο',
    nl: 'Gyroscoop',
    de: 'Gyroskop',
    he: 'חיישן ג'יירו',
  },
  '#sim-angle#': {
    en: 'Angle (degrees)',
    fr: 'Angle (degrés)',
    el: 'Γωνία (μοίρες)',
    nl: 'Graden',
    de: 'Winkel (grad)',
  },
  '#sim-gps#': {
    en: 'GPS Sensor',
    fr: 'Capteur GPS',
    el: 'Αισθητήρας GPS',
    nl: 'GPS sensor',
    de: 'GPS-Sensor',
    he: 'חיישן מיקום/זווית',
  },
  '#sim-altitude#': {
    en: 'Altitude (cm)',
    fr: 'Altitude (cm)',
    el: 'Υψόμετρο (εκ)',
    nl: 'Hoogte (cm)',
    de: 'Jöhe (cm)',
    he: 'גובה (ס\'מ)'
  },
  '#sim-laser#': {
    en: 'Laser Range Sensor',
    fr: 'Télémètre laser',
    el: 'Αισθητήρας Απόστασης Laser',
    nl: 'Laser afstand sensor',
    de: 'Laser-Entfernungssensor',
    he: 'מרחק חיישן לייזר'
  },
  '#sim-pen#': {
    en: 'Pen',
    nl: 'Pen',
    de: 'Stift',
    he: 'עט'
  },
  '#sim-touch#': {
    en: 'Touch Sensor',
    nl: 'Drukknop-sensor',
    de: 'Behrührungssensor',
    he: 'חיישן מגע'
  },
  '#sim-is_pressed#': {
    en: 'Is Pressed',
    nl: 'Is ingedrukt',
    de: 'Ist gedrückt',
    he: 'לחוץ'
  },
  '#sim-left_motor#': {
    en: 'Left Motor',
    fr: 'Moteur gauche',
    el: 'Αριστερός κινητήρας',
    nl: 'Linker motor',
    de: 'Linker Motor',
    he: 'מנוע שמאלי'
  },
  '#sim-position#': {
    en: 'Position (degrees)',
    fr: 'Position (degrés)',
    el: 'Θέση (μοίρες)',
    nl: 'Positie (graden)',
    de: 'Position (grad)',
    he: 'מיקום'
  },
  '#sim-magnet#': {
    en: 'Electromagnet',
    he: 'אלקטרומגנט'
  },
  '#sim-magnet_power#': {
    en: 'Magnet Power (%)',
    he: 'עוצמת מגנט (%)'
  },
  '#sim-right_motor#': {
    en: 'Right Motor',
    fr: 'Moteur droit',
    el: 'Δεξιός κινητήρας',
    nl: 'Rechter motor',
    de: 'Rechter Motor',
    he: 'מנוע ימני'
  },
  '#sim-arm#': {
    en: 'Arm Actuator',
    fr: 'Actionneur du bras',
    el: 'Ενεργοποιητής Bραχίονα',
    nl: 'Arm aandrijving',
    de: 'Armantrieb',
    he: 'מפעיל זרוע'
  },
  '#sim-swivel#': {
    en: 'Swivel Actuator',
    fr: 'Tourelle',
    el: 'Ενεργοποιητής Περιστρεφόμενης Πλατφόρμας',
    nl: 'Draai aandrijving',
    de: 'schwenkbarer Antrieb',
    he: 'מפעיל מסתובב'
  },
  '#sim-paintball#': {
    en: 'Paintball Launcher',
    fr: 'Lanceur de paintball',
    el: 'Ενεργοποιητής Εκτοξευτήρα Paintball',
    nl: 'Paintball kanon',
    de: 'Paintball Launcher',
    he: 'שגר פיינטבול'
  },
  '#sim-save#': {
    en: 'Save',
    fr: 'Sauvegarder',
    el: 'Αποθηκεύση',
    nl: 'Opslaan',
    de: 'Speichern',
    he: 'שמור'
  },
  '#sim-load#': {
    en: 'Load',
    fr: 'Charger',
    el: 'Φορτώση',
    nl: 'Laden',
    de: 'Laden',
    he: 'טען מקובץ'
  },
  '#sim-default#': {
    en: 'Default',
    fr: 'Par défaut',
    el: 'Προεπιλογή',
    nl: 'Standaard',
    de: 'Standard',
    he: 'ברירת מחדל'
  },
  '#sim-cancel#': {
    en: 'Cancel',
    fr: 'Abandonner',
    el: 'Aκυρώση',
    nl: 'Annuleren',
    de: 'Abbrechen',
    he: 'ביטול'
  },
  '#sim-ok#': {
    en: 'Ok',
    fr: 'Ok',
    nl: 'Oké',
    de: 'Ok',
    he: 'אישור'
  },
  '#sim-select_world#': {
    en: 'Select World',
    fr: 'Sélectionnez votre univers',
    el: 'Επιλέξτε κόσμο',
    nl: 'Selecteer wereld',
    de: 'Wähle eine Welt',
    he: 'בחר עולם'
  },
  '#sim-invalid_map#': {
    en: 'Invalid map configurations',
    fr: 'Configuration de la carte invalide',
    el: 'Μη έγκυρες διαμορφώσεις χάρτη',
    nl: 'Ongeldige map configuraties',
    de: 'Falsche Kartenkonfiguration',
    he: 'הגדרות מפה לא תקינות'
  },
  '#blockly-save#': {
    en: 'Save Now',
    fr: 'Enregistrer maintenant',
    el: 'Αποθήκευση τώρα',
    nl: 'Nu opslaan',
    de: 'Speicher jetzt',
    he: 'שמור עכשיו'
  },
  '#blockly-add_page#': {
    en: 'Add Page',
    fr: 'Ajouter une page',
    el: 'Προσθήκη σελίδας',
    nl: 'Voeg pagina toe',
    de: 'Seite hinzufügen',
    he: 'הוסף עמוד'
  },
  '#blockly-copy_page#': {
    en: 'Copy Current Page',
    fr: 'Copier la page en cours',
    el: 'Αντιγραφή τρέχουσας σελίδας',
    nl: 'Kopieer huidige pagina',
    de: 'Kopiere diese Seite',
    he: 'העתק עמוד נוכחי'
  },
  '#blockly-rename_page#': {
    en: 'Rename Current Page',
    fr: 'Renommer la page en cours',
    el: 'Μετονομασία τρέχουσας σελίδας',
    nl: 'Hernoem huidige pagina',
    de: 'Benenne diese Seite um',
    he: 'שנה שם של עמוד נוכחי'
  },
  '#blockly-delete_page#': {
    en: 'Delete Current Page',
    fr: 'Effacer la page en cours',
    el: 'Διαγραφή τρέχουσας σελίδας',
    de: 'Entferne diese Seite',
    he: 'מחק עמוק נוכחי'
  },
  '#blockly-new_page_name#': {
    en: 'New page name',
    fr: 'Nom de la nouvelle page',
    el: 'Όνομα νέας σελίδας',
    nl: 'Nieuwe pagina',
    de: 'neuer Seitenname',
    he: 'שם עמוד חדש'
  },
  '#blockly-page_name#': {
    en: 'Page name',
    fr: 'Nom de la page',
    el: 'Όνομα σελίδας',
    nl: 'Pagina naam',
    de: 'Seitenname',
    he: 'שם העמוד'
  },
  '#blockly-is_in_use#': {
    en: 'is already in use',
    fr: 'est déjà utilisé',
    el: 'είναι ήδη σε χρηση',
    nl: 'Is al in gebruik',
    de: 'ist schon in Benutzung',
    he: 'כבר בשימוש'
  },
  '#blockly-page#': {
    en: 'Page',
    fr: 'Page',
    el: 'Σελίδα',
    nl: 'Pagina',
    de: 'Seite',
    he: 'עמוד'
  },
  '#blockly-added#': {
    en: 'added',
    fr: 'ajouté',
    el: 'προστέθηκε',
    nl: 'Toegevoegd',
    de: 'hinzugefügt',
    he: 'הוסף'
  },
  '#blockly-copy_to_page_name#': {
    en: 'Copy to page name',
    fr: 'Copier en nom de page',
    el: 'Αντιγραφή στο όνομα της σελίδας',
    nl: 'Kopieer naar pagina naam',
    de: 'Auf Seitennamen kopieren',
    he: 'העתק שם עמוד'
  },
  '#blockly-copied_to#': {
    en: 'copied to',
    fr: 'copié vers',
    el: 'αντιγράφηκε στο',
    nl: 'Gekopieerd naar',
    de: 'kopiert nach',
    he: 'הועתק ל'
  },
  '#blockly-cannot_rename_main#': {
    en: 'Cannot rename Main page',
    fr: 'Impossible de renommer la page principale',
    el: 'Δεν είναι δυνατή η μετονομασία της κύριας σελίδας',
    nl: 'Kan huidige pagina niet hernoemen',
    de: 'Die Hauptseite kann nicht umbennant werden',
    he: 'לא ניתן לשנות את שם העמוד הראשי'
  },
  '#blockly-is_in_use#': {
    en: 'is already in use',
    fr: 'est déjà utilisé',
    el: 'είναι ήδη σε χρηση',
    nl: 'is al in gebruik',
    de: 'ist bereits in Nutzung',
  },
  '#blockly-cannot_delete_main#': {
    en: 'Cannot delete Main page',
    fr: 'Impossible de supprimer la page principale',
    el: 'Δεν είναι δυνατή η διαγραφή της κύριας σελίδας',
    nl: 'Kan huidige pagina niet verwijderen',
    de: 'Die Hauptseite kann nicht gelöscht werden',
    he: 'לא ניתן למחוק את העמוד הראשי'
  },
  '#blockly-delete#': {
    en: 'Delete',
    fr: 'Supprimer',
    el: 'Διαγραφή',
    nl: 'Verwijder',
    de: 'Löschen',
    he: 'מחק'
  },
  '#blockly-all_blocks_lost_warning#': {
    en: 'All blocks on page will be lost.',
    fr: 'Tous les blocs sur la page seront perdus.',
    el: 'Όλα τα μπλοκ στη σελίδα θα χαθούν.',
    nl: 'Alle blokken op de pagina gaan verloren.',
    de: 'Alle Blöcke on der Seiten werden verloren sein.',
    he: 'כל הבלוקים בעמוד ימחקו'
  },
  '#blockly-enable_blocks#': {
    en: 'Enable Blocks Mode',
    fr: 'Passer en mode Blocs',
    el: 'Ενεργοποίηση λειτουργίας μπλοκ',
    nl: 'Activeer blokken modus',
    de: 'Aktiviere Blöckemodus',
    he: 'הפעל מצב בלוקים'
  },
  '#blockly-python_lost_warning#': {
    en: 'Enabling blocks mode will cause all Python changes to be lost.',
    fr: 'Passer en mode Blocs fera perdre toutes les modifications dans le code Python.',
    el: 'Η ενεργοποίηση της λειτουργίας μπλοκ θα προκαλέσει απώλεια όλων των αλλαγών Python',
    nl: 'Alle Python gaat verloren als blokken modus wordt geactiveerd.',
    de: 'Das aktivieren des Blöckemdus wird dazu führen, dass alle Pythonänderungen verloren sein werden',
    he: 'הפעלת מצב בלוקים ימחק את השינויים שנעשו בפייתון'
  },
  '#python-save#': {
    en: 'Save Now',
    fr: 'Enregistrer maintenant',
    el: 'Αποθήκευση τώρα',
    nl: 'Nu opslaan',
    de: 'Speicher jetzt',
    he: 'שמור עכשיו'
  },
  '#python-warning#': {
    en: 'Warning!',
    fr: 'Attention!',
    el: 'Προσοχή!',
    nl: 'Waarschuwing!',
    de: 'Warunung!',
    he: 'הזהרה!'
  },
  '#python-cannot_change_back_warning#': {
    en: 'Changes to Python code cannot be converted back into blocks!',
    fr: 'Les modifications faites dans le code Python ne pourront pas être converties en blocs !',
    el: 'Οι αλλαγές στον κώδικα Python δεν μπορούν να μετατραπούν ξανά σε μπλοκ!',
    nl: 'Veranderingen in de Python code worden niet omgezet in blokken!',
    de: 'Änderungen am Pythoncode können nicht zurück zu Blöcken konvertiert werden!',
    he: 'שינויים בקוד פייתון לא יכולים להיות מומרים חזרה למצב בלוקים!'
    }
};
let MSGS_KEYS = Object.keys(MSGS);

let LANG = localStorage.getItem('LANG');
if (!LANG || LANG == '' || LANG == 'undefined') {
  LANG = 'en';
}

var i18n = new function() {
  var self = this;

  // Append to messages
  this.append = function(msgs) {
    MSGS = Object.assign(MSGS, msgs);
    MSGS_KEYS = Object.keys(MSGS);
  };

  // Get a single string
  this.get = function(requestedKey) {
    let messages = MSGS[requestedKey];
    if (typeof messages == 'undefined') {
      return requestedKey;
    }
    let message = messages[LANG]
    if (typeof message == 'undefined') {
      if (typeof messages['en'] == 'undefined') {
        return requestedKey;
      } else {
        return messages['en'];
      }
    }
    return message;
  };

  // Change all keys in provided string
  this.replace = function(input) {
    let regEx = '';
    for (key of MSGS_KEYS) {
      regEx += key + '|';
    }
    regEx = regEx.slice(0, regEx.length - 1);
    regEx = new RegExp(regEx, 'g');
    return input.replace(regEx, function(key){
      return self.get(key);
    })
  }
}