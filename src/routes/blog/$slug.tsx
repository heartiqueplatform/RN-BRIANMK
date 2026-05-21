import { createFileRoute, Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase";
import { Clock, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown"; // This is the translator

export const Route = createFileRoute("/blog/$slug")({
    loader: async ({ params }) => {
        const { data, error } = await supabase
            .from("blog_posts")
            .select("*")
            .eq("slug", params.slug)
            .single();

        if (error) throw error;
        return { post: data };
    },
    component: PostDetail,
});

function PostDetail() {
    const { post } = Route.useLoaderData();

    return (
        <div className="pt-32 pb-20 max-w-3xl mx-auto px-5">
            <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-10 transition-colors group"
            >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Writing
            </Link>

            <article>
                <header className="mb-12">
                    <div className="flex items-center gap-3 text-xs mb-4">
                        <span className="font-mono text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">
                            {post.category}
                        </span>
                        <span className="text-muted-foreground inline-flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {post.read_time}
                        </span>
                        <span className="text-muted-foreground">{post.post_date}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-display font-semibold leading-[1.1] tracking-tight text-balance">
                        {post.title}
                    </h1>
                </header>

                {/* The Story Body - Now with Markdown Support */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
                    {post.content ? (
                        <ReactMarkdown>
                            {post.content.replace(/\\n/g, '\n')}
                        </ReactMarkdown>
                    ) : (
                        <p className="text-xl text-muted-foreground italic">
                            {post.excerpt}
                        </p>
                    )}
                </div>
            </article>
        </div>
    );
}