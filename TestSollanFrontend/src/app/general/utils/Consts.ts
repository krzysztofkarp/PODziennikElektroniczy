export class Consts {

    static Headers = class {
        static Key = class {
            static readonly ACCEPT = 'Accept';
            static readonly CONTENT_TYPE = 'Content-Type';
        };
        static Value = class {
            static readonly APPLICATION_JSON = 'application/json';
        };
    };


    static Other = class {
        static readonly YES = 'yes';
        static readonly NO = 'no';
        static readonly QUESTION_ID = 'questionId';
        static readonly CURRENT_QUESTION_ID = 'currentQuestionId';
        static readonly WAS_STARTED = 'wasStarted';
        static readonly ANSWERS = 'answers';
        static readonly IMG = 'img/q';
        static readonly JPG = '.jpg';
        static readonly TIME_OVER = '0:00';
        static readonly NO_ANSWERS = 'No answers checked!';
        static readonly NAME = 'name';
        static readonly ONE = '1';
    }

    static Students = class {
        static readonly ALL = "/student/all";
    }

    static Messages = class {
        static readonly WRONG_CREDENTIALS = "Nieprawidłowe dane logowania!";
        static readonly NOT_LOGGED_IN = "Nie jesteś obecnie zalogowany, zaloguj się!"
        static readonly NEW_USER = "Nowy użytkownik";
        static readonly NEW_CLASS = "Nowa klasa";
        static readonly USER_SAVED = "Zapisano użytkownika";
        static readonly USER_SAVE_ERROR = "Nie można zapisać użytkownika! Nieoczekiwany błąd"
        static readonly USER_REMOVE_ERROR = "Nie można usunąć użytkownika! Nieoczekiwany błąd"
        static readonly STUDENT_SAVED= "Zapisano studenta"
        static readonly STUDENT_DELETED= "Konto studenta pomyślnie usunięte"
        static readonly STUDENT_REMOVED_FROM_CLASS= "Uczeń usunięty z klasy"
        static readonly TEACHER_SAVED= "Zapisano nauczyciela"
        static readonly TEACHER_DELETED= "Konto nauczyciela pomyślnie usunięte"
        static readonly PARENT_SAVED= "Zapisano rodzica"
        static readonly PARENT_DELETED= "Konto rodzica pomyślnie usunięte"
        static readonly CLASS_SAVE_ERROR = "Nie można zapisać klasy! Nieoczekiwany błąd"
        static readonly CLASS_SAVED = "Zapisano klasę";
        static readonly CLASS_DELETED = "Usunięto klasę";
        static readonly CLASS_DELETE_ERROR = "Nie można usunąć klasy! Nieoczekiwany bład";
        static readonly CLASS_NAME_NOT_VALID = "Nazwa klasy nie spełnia wymagań!";
        static readonly ADD_SUBJECT = "Nowy przedmiot"
        static readonly SUBJECT_SAVED = "Zapisano przedmiot";
        static readonly SUBJECT_DELETED = "Usunieto przedmiot";
        static readonly SUBJECT_DELETE_ERROR = "Nie można usunąć przedmiotu! Nieoczekiwany bład";
        static readonly SUBJECT_SAVED_ERROR = "Nie można zapisać przedmiotu! Nieoczekiwany błąd";
        static readonly SUBJECT_EXISTS = "Nie można zapisać przedmiotu! Przedmiot o danej nazwie już istnieje";
        static readonly SUBJECT_NAME_NOT_VALID = "Niepoprawna nazwa przedmiotu!"
        static readonly CHANGES_SAVED="Zmiany zostały zapisane"
        static readonly CHANGES_SAVED_ERROR="Nie udało się zapisać zmian! Nieoczekiwany bład"
        static readonly NO_STUDENTS = "Nie ma uczniów do przypisania!";
        static readonly NO_SUBJECTS = "Nie ma przedmiotów do przypisania!";
        static readonly NO_TEACHERS = "Nie ma nauczycieli do przypisania!"
        static readonly TEACHER_ASSIGNED = "Przypisano nauczyciela";
        static readonly TEACHER_ASSIGN_ERROR = "Nie udało się przypisać nauczyciela! Nieoczekiwany błąd";
        static readonly PASSWORD_CHANGED = "Hasło zostało zmienione";
        static readonly PASSWORD_CHANGE_ERROR = "Nie udało się zmienić hasła! Nieoczekiwany błąd";
        static readonly PASSWORDS_NOT_EQUAL = "Podane hasła nie są jednakowe!"
        static readonly FILL_ALL_FIELDS = "Nie wszystkie pola wypełnione!"
        static readonly AGE_ERROR = "Uzytkownik nie spełnia wymagań wiekowych!"
        static readonly FIELDS_NOT_VALID = "Nie wszystkie pola wypełniono poprawnie"
        static readonly GRADE_SAVED = "Ocena zapisana";
        static readonly GRADE_SAVED_ERROR = "Nie udało się zapisać oceny";
        static readonly GRADE_REMOVED = "Ocena usunieta";
        static readonly GRADE_REMOVED_ERROR = "Nie udało się usunąć oceny";
        static readonly NOTE_SAVED = "Uwaga zapisana";
        static readonly NOTE_SAVED_ERROR = "Nie udało się zapisać uwagi";
        static readonly NOTE_REMOVED = "Uwaga usunieta";
        static readonly NOTE_REMOVED_ERROR = "Nie udało się usunąć uwagi";
        static readonly MESSAGE_SENT = "Wiadomosć wysłana";
        static readonly MESSAGE_SENT_ERROR = "Nie udało się wysłać wiadomosci";
        static readonly ATTENDANCE_SAVED = "Obecność zapisana";
        static readonly ATTENDANCE_SAVE_ERROR = " Nie udało sie zapisać obecnosci!";
        static readonly POST_ADDED = "Post dodany"
        static readonly POST_ADDED_ERROR = "Nie udało się dodac posta"
        static readonly POST_SAVED = "Post zapisany"
        static readonly POST_SAVED_ERROR = "Nie udało się zapisać posta"
        static readonly ADMIN = "Administrator";
        static readonly POST_REMOVED = "Post usunięty"
        static readonly POST_REMOVED_ERROR = "Nie udało się usunąc posta"
    }

    static StorageKey = class {
        static readonly USER = "user";
        static readonly AUTH_TOKEN = "X-AUTH-TOKEN";
    }

    static FormFields = class {
        static readonly LOGIN = "login";
        static readonly PASSWORD = "password";
    }

    static RouterPaths = class {
        static readonly ACCOUNT = "/account";
        static readonly LOGIN = "/login";
    }

    static Regex = class {
        static CLASS_NAME = new RegExp("\w*[0-9]\w*[A-Z]\w*");
        static EMAIL_REGEX = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+"[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
        static SUBJECT_NAME = new RegExp('[0-9!@#$%^&*(),.?":{}|<>]');
        static PASSWORD_PATTERN = /^.*(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*:+]).{8,}$/;
        static ONLY_LETTERS = /^[a-zA-Z]+$/i;
        static FIRST_NAME = new RegExp("^[A-ZĄĆĘŁŃÓŚŹŻ]+(([',. -][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ])?[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*)*$");
    }

    static Properties = class {
        static STUDENT_CLASS = "studentClass"
        static CHILDREN = "children"
        static TEACHER_SUBJECTS = "teacherSubjects"
    }

    static Fields = class{
        static readonly USER_EMAIL = "email";
        static readonly USER_LOGIN = "login";
        static readonly USER_PASSWORD = "password";
        static readonly USER_FIRST_NAME = "firstName";
        static readonly USER_SECOND_NAME = "secondName";
    }
    



}
