const initialState = {
    all_blogs: [],
    curr_user_blogs: [],
    curr_blog: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return {
                ...state,
                all_blogs: [...state.all_blogs, { ...action.payload }]
            }
        case "CURR_USER_BLOG":
            let blogs = state.all_blogs.filter((blog) => {
                return blog.email == action.email
            })
            return {
                ...state,
                curr_user_blogs: blogs
            }
        case "CURR_BLOG":
            return {
                ...state,
                curr_blog: action.payload
            }
        case "LIKE_ME":
            let like_blog = state.all_blogs.find((blog) => {
                return blog.id === action.blog_id
            })
            let older_blog_history = state.all_blogs.filter((blog) => {
                return blog.id !== action.blog_id
            })
            like_blog["likes"] = action.count
            //if user is already liked any blog then just marking that blog is liked by curr user
            if (!like_blog.user_likes.includes(action.email)) {
                let user_like = like_blog["user_likes"]
                user_like.push(action.email)
                like_blog["user_likes"] = user_like
            }
            return {
                ...state,
                all_blogs: [...older_blog_history, { ...like_blog }]
            }
        default: return state
    }
}

export default reducer