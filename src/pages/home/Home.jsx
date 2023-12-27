
const Home = () => {
    return (
        <div>
            {/* banner section  */}
            <div className="md:flex gap-4 mx-auto p-6 bg-[#fbf8f8]">
                <div className="bg-gray-400 flex-1 rounded-md">
                    <img className="w-full rounded-md"
                    src="https://images.unsplash.com/photo-1582137490248-c53207ec5602?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog-banner-image" />
                </div>
                <div className="flex-1 pl-2">
                    <h1 className="text-4xl md:text-5xl py-6 font-serif text-gray-700 font-extrabold">Tale Blogs Here...</h1>
                    <div className="text-xl md:text-2xl font-serif font-semibold pb-4  text-gray-500 "><h1>Write Your <span className="text-red-500">Story</span> 📖,</h1><h1 className="mt-2">Share Your <span className="text-green-500">Knowledge 💡</span></h1></div>
                    <p className="font-serif text-gray-500 mb-4">You can also be a creative writer and as well as a reader for other blogs. People are very shy when they start writing, so we highly encourage you to write your own unique story.</p>
                    <button className="bg-red-600 hover:bg-red-700 mt-5 text-white font-bold md:text-xl px-3 py-2 rounded-lg">Read Blogs</button>
                </div>
            </div>
        </div>
    );
};

export default Home;