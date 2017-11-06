global.main = function() {
    sendReply("global.main()");
};

var notMain = function() {
    sendReply("notMain()");
};

module.exports = {
    notMain: notMain
};
