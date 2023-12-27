
const Home = () => {
    return (
        <div>
            {/* banner section  */}
            <div className="md:flex gap-4 mx-auto p-6">
                <div className="bg-gray-400 flex-1">
                    <img className="w-full"
                    src="https://images.unsplash.com/photo-1582137490248-c53207ec5602?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog-banner-image" />
                </div>
                <div className="flex-1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cupiditate recusandae voluptatum esse provident dolore nostrum in ad, asperiores, aliquid eos doloribus numquam consequuntur, unde assumenda! Quibusdam ipsam debitis porro earum quisquam alias repellat, tenetur id repudiandae fuga, totam enim obcaecati modi est pariatur. Distinctio nemo nesciunt hic repellat commodi!</p>
                </div>
            </div>
        </div>
    );
};

export default Home;