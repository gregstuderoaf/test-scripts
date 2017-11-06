globals.main = function() {
    sendReply("globals.main()");
};

var notMain = function() {
    sendReply("notMain()");
};

module.exports = {
    notMain: notMain
};
