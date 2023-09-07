import Footer from "./Footer";
import BlogPosts from "./Heroes/BlogPosts";

export default function BlogLanding() {
    return (
        <div className="flex flex-col justify-center items-center mt-10 p-10">
            <BlogPosts />
            <Footer />
        </div>
    )
}