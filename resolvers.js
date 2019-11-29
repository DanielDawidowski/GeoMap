const user = {
    _id: '1',
    name: "dani",
    email: 'dvds1987@gmail.com',
    picture: "htttp://cloudinary.com/asdf"
}

module.exports = {
    Query: {
        me: () => user
    }
}