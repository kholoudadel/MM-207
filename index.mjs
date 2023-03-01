import express from 'express'

const server = express();
const port = (process.env.PORT || 8080);

server.set('port', port);
server.use(express.static('public'));
server.get("/joke/:lang", (req, res, next) => {

    if (req.params.lang === 'no') {
        res.send("To tomater gikk over en vei. Så ble den ene påkjørt. da sa den andre . komm igjen ketchup.")
    } else {

        res.send("What's the best thing about Switzerland? I don't know, but the flag is a big plus.")
    }

});

server.listen(server.get('port'), function () {
    console.log('server running', server.get('port'));
}); 
