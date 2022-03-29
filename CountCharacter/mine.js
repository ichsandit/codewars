function count (string) {
    var result = {};
    if (!string) return result;
    string.split("").forEach(v => {
        result[v] = string.match(new RegExp(`[${v}]`, 'gi')).length;
    });
    return result;
}
