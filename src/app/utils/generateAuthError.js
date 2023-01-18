export function generateAuthError(message) {
    switch (message) {
        case "INVALID_PASSWORD": return "Email или пароль введены не правильно";
        case "EMAIL_EXISTS": return "Пользователь с таким Email уже существует";
        default:
            return "Слишком много попыток входа, попробуйте позже";
    }
};
