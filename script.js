function stringChop(str, size) {
    if (!str) return [];
    size = parseInt(size);
    if (size <= 0) return [];
    const result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.substring(i, i + size));
    }
    return result;
}

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
