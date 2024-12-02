function displayDay() {
    let day = parseInt(document.getElementById("day").value);
    switch(day) {
        case 1:
        document.getElementById("display").textContent = "Monday";
        break;
            case 2:
                document.getElementById("display").textContent = "Tuesday";
                break;
                    case 3:
                    document.getElementById("display").textContent = "Wednesday";
                    break;
                        case 4:
                        document.getElementById("display").textContent = "Thursday";
                        break;
                            case 5:
                            document.getElementById("display").textContent = "Friday";
                            break;
                                case 6:
                                document.getElementById("display").textContent = "Saturday";
                                break;
                                    case 7:
                                    document.getElementById("display").textContent = "Sunday";
                                    break;
    default:
        document.getElementById("display").textContent = "Unknown Day";
        break;
    }
}