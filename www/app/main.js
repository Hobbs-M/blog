define(function (require) {
    var Posts = require('./Posts'),
        posts = new Posts();

    $(document).ready(function () {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => initPosts(json));

        function initPosts (data) {
            posts.show(data);

            $(document).find(".post .view-comments").on("click", getPost);       
        }

        function getPost (event){
            var post = $(event.target).closest(".post")
                id = post.data("id");

            if (post.hasClass("open")) {
                post.find(".view-comments a").text("View Comments");
                post.removeClass("open");
                post.find(".post-comments ul").empty();
            } else {
                post.addClass("open");
               post.find(".view-comments a").text("Hide Comments");
                fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
                    .then(response => response.json())
                    .then(json => showComments(json));
            }
        }

        function showComments (data) {
            posts.showComments(data);
        }

    });

});
