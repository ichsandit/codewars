const rps = (p1, p2) => {
    const win = (player) => `Player ${player} won!`;
    const draw = "Draw!";

    const battle = (first, second) => {
        var point;
        switch (first) {
            case 'scissors':
                point = {paper: 1, rock: 2};
                break;

            case 'rock':
                point = {paper: 2, scissors: 1};
                break;

            case 'paper':
                point = {rock: 1, scissors: 2};
                break;
        }

        return point[second];
    };

    if (p1 === p2) {
        return draw;
    }

    return win(battle(p1, p2));
};
