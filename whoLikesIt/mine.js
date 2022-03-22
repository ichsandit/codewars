function likes(names) {
    if (!names.length) return "no one likes this";

    if (names.length >= 4) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;

    switch (names.length) {
        case 1:
            return `${names[0]} likes this`;
            break;

        case 2:
            return `${names[0]} and ${names[1]} like this`;
            break;

        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
            break;
    }
}
