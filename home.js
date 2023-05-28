/*export class commentbox extends HTMLElement{
    constructor(){
        super();
        this.level = this.getAttribute("level")
                    ? parseInt (this.getAttribute("level"))
                    : 0;
        this.likeCount = 0; 
        this.attachShadow({mode: "Open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.commetEdit = this.shadowRoot.querySelector(".comment-edit");
        this.commentDisplay = this.shadowRoot.querySelector(".comment-display;")          
    }
    connectedCallback(){
        this.commentEdit
            .querySelector(".submit-btn")
            .addEventListener("click", () => this.commentSubmit());
        this.commentDisplay
            .querySelector(".like-btn")
            .addEventListener("click", () => this.commentLike());

            const nestingLimit = 3;    
        if(this.level < nestingLimit){
            this.commentDisplay
                .querySelector(".reply-btn")
                .addEventListener("click", () => this.commentReply());         
        }
        else{
            this.commentDisplay.querySelector(".reply-btn").disabled = true;
        }   
        this.commentDisplay.getElementsByClassName.display = "none";
    }
    disconnectedCallback(){
        this.commetEdit.querySelector(".comment-submit").removeEventListener();
        this.commetEdit.querySelector(".reply-btn").removeEventListener();
        this.commetEdit.querySelector(".like-btn").removeEventListener();

    }
    
    commentSubmit(){
        const commentInput = this.commetEdit.querySelector(".comment-input");

        const comment = this.commetEdit.querySelector(".comment");
        const author = this.commetEdit.querySelector(".author");

        comment.innerHTML = commentInput.value;
        author.innerHTML = 'Author: ${sessionsStorage.getItem("currentUser)}';

        this.commentEdit.style.display = "none";
        this.commentDisplay.style.display = "block";
    }

    commentLike(){
        const likes = this.commentDisplay.querySelector(".likes");

        this.likeCount++;
        likes.innerHTML = 'Likes: ${this.likeCount}';
    }

    commentReply(){
        const replyBox = this.commentDisplay.querySelector(".reply-box");
        const newCommentBox = document.createElement(".comment-box");

        let newLevel = this.level + 1;
        newCommentBox.setAttribute("level", newLevel);
        newCommentBox.level = newLevel;

        if(replyBox.childNodes){
            replyBox.insertBefore(newCommentBox, replyBox.childNodes[0]);
        } else {
            replyBox.appendChild(newCommentBox);
        }
    }
}*/




