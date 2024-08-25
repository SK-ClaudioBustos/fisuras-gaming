const getCorrectColor = (key: number): string => {
    switch (key) {
        case 0:
            return "#FFD700"
        case 1:
            return "#fff"
        case 2:
            return "#b87333"
        default:
            return "#C1C2C3";
    }
};

export default getCorrectColor;