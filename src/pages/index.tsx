import React from "react";
import Link from "next/link";

const IndexPage: React.FC<{ title: string }> = () => {
    return (
        <>
            Welcome to nexa{"  "}
            <Link href="/[nexaId]" as="/nexa">
                <a>See the first nexa</a>
            </Link>
        </>
    );
};

export default IndexPage;
