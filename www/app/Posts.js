define(["Handlebars"], function (Handlebars) {
    var templates = {
            post: Handlebars.compile(getPostTemplate()),
            postComments: Handlebars.compile(getCommentsTemplate())
        },
        element = $(".posts");   

    class Posts {
        constructor () {}

        show (posts) {
            posts.forEach(showPost);
        }

        showComments (comments) {
            var commentsDiv = $(".posts").find(".post[data-id='" + comments[0].postId + "'] .post-comments ul");

            comments.forEach(function (comment) {
                commentsDiv.append(templates.postComments(Object.assign({}, comment)));
            });
        }
    }

    function showPost (post) {
        var section = $(".posts");

        section.append(templates.post(Object.assign({}, post)));
    }

    return Posts;
});

function getPostTemplate () {
    return `
         <section class="post" data-id={{id}}>
            <header class="post-header">
                <h2 class="post-title">{{title}}</h2>
            </header>

            <div class="post-description">
               {{body}}
            </div>
            <h4 class="view-comments"><a>View Comments</a></h4>
            <div class="post-comments">
                <ul></ul>
            </div>
        </section>
     `
}

function getCommentsTemplate () {
    return `
        <li data-id="{{id}}">
            <a href="mailto:{{email}}">{{name}}</a>
            <p>{{body}}</p>
        </li>
     `
}
