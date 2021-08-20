
exports.install = function() {
    ROUTE('/test/', action, ['post','json']);
};

function action(){

    var self = this;

    var data = {title: self.body.title, body: self.body.body, userId: self.body.userId}

    RESTBuilder.POST("https://jsonplaceholder.typicode.com/posts",
            data)
            .exec(function(err, response, output){
        console.log();
        self.plain(response);
    });


}