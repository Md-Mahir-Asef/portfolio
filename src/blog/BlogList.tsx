import Footer from "../sections/Footer";
import Header from "../sections/Header";
import BlogCard from "./components/BlogCard";
import { getBlogPosts, getBlogPostsByPage, getTotalPages } from "./blogUtils";
import useScrollReveal from "../hooks/useScrollReveal";
import ScrollProgress from "../components/ScrollProgress";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BlogList() {
    const PostsPerPage = 9;
    const { page } = useParams();
    const navigate = useNavigate();
    const currentPageFromUrl = page ? parseInt(page, 10) : 1;
    const [currentPage, setCurrentPage] = useState(currentPageFromUrl);

    useScrollReveal();

    const totalPages = getTotalPages(PostsPerPage);
    const currentPosts = getBlogPostsByPage(currentPage, PostsPerPage);

    const handlePageChange = (
        _event: React.ChangeEvent<unknown>,
        value: number,
    ) => {
        console.log("From handlePageChange", value);
        setCurrentPage(value);
        navigate(`/blog/page/${value}`);
        window.location.reload();
    };

    return (
        <div>
            <ScrollProgress />
            <Header />

            {/* Hero Section */}
            <section className="bg-gray-900 text-white py-12 xs:py-16 sm:py-20 px-4 xs:px-6 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4 xs:mb-6 scroll-reveal">
                        <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Blog & Articles
                        </span>
                    </h1>
                    <p
                        className="text-lg xs:text-xl text-gray-300 max-w-3xl mx-auto scroll-reveal"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Thoughts, tutorials, and insights about software
                        development, system design, and technology trends.
                        Sharing my journey as a full-stack developer.
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="bg-gray-900 text-white py-12 xs:py-16 px-4 xs:px-6 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8">
                        {currentPosts?.map((post, index) => (
                            <BlogCard key={post.id} post={post} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Pagination Section */}
            {totalPages > 1 && (
                <section className="bg-gray-900 text-white py-8 xs:py-12 px-4 xs:px-6 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-center">
                            {/* Pagination */}
                            <Stack spacing={2}>
                                <Pagination
                                    count={totalPages}
                                    page={currentPage}
                                    onChange={handlePageChange}
                                    color="primary"
                                    size="small"
                                    sx={{
                                        "& .MuiPaginationItem-root": {
                                            color: "#ffffff",
                                            borderColor: "#333333",
                                            fontSize: "0.875rem",
                                            minWidth: "32px",
                                            height: "32px",
                                            "&:hover": {
                                                backgroundColor: "#9333ea",
                                            },
                                        },
                                        "& .MuiPaginationItem-ellipsis": {
                                            color: "#9ca3af",
                                        },
                                        "& .Mui-selected": {
                                            backgroundColor:
                                                "#9333ea !important",
                                            color: "#ffffff",
                                            "&:hover": {
                                                backgroundColor:
                                                    "#7c3aed !important",
                                            },
                                        },
                                    }}
                                />
                            </Stack>
                        </div>

                        {/* Page Info */}
                        <div className="text-center mt-4 xs:mt-6">
                            <p className="text-xs xs:text-sm text-gray-400">
                                Showing {(currentPage - 1) * PostsPerPage + 1}{" "}
                                to{" "}
                                {Math.min(
                                    currentPage * PostsPerPage,
                                    getBlogPosts().length,
                                )}{" "}
                                of {getBlogPosts().length} posts
                            </p>
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
}
