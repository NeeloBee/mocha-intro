function buyMinutes(minutes) {
    if (!minutes) {
        return "Please insert correct amount";
    }

    let price = 1.85;
    if (minutes > 50) {
        price = 1.35;
    }

    const result = minutes * price;
    return result.toFixed(2);
}