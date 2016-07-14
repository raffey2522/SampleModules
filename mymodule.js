function area(l,w) {
    return l * w
}

function perimeter(l,w) {
    return (l + w) * 2
}

module.exports={
    computeArea: area,
    computePerimeter: perimeter
};