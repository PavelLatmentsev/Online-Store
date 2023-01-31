function displayDate(data) {
    const dateUser = new Date(parseInt(data));
    const currentDate = new Date();
    const difYear = currentDate.getFullYear() - dateUser.getFullYear();
    if (difYear === 0) {
        const difDay = currentDate.getDate() - dateUser.getDate();
        if (difDay === 0) {
            const difHours = currentDate.getHours() - dateUser.getHours();
            if (difHours === 0) {
                const minutesDif =
                    currentDate.getMinutes() - dateUser.getMinutes();

                if (minutesDif >= 0 && minutesDif < 5) return "1 минуту назад";
                if (minutesDif >= 5 && minutesDif < 10) return "5 минут назад";
                if (minutesDif >= 10 && minutesDif < 30) {
                    return "10 минут назад";
                }
                return "30 минут назад";
            }
            return `${dateUser.getHours()}:${dateUser.getMinutes()}`;
        }
        return `${dateUser.getDate()} ${dateUser.toLocaleString("default", {
            month: "long"
        })}`;
    }

    return (
        dateUser.getFullYear() +
        "." +
        (dateUser.getMonth() + 1) +
        "_" +
        dateUser.getDate()
    );
};

export default displayDate;
