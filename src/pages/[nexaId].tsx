import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

// Routing in nextjs
const Nexa = (): React.ReactElement | null => {
    const router = useRouter();
    const { nexaId } = router.query;

    return nexaId ? (
        <>
            {nexaId} {"  "}
            <Link href="/" as="/">
                <a>Go to home</a>
            </Link>
        </>
    ) : null;
};

export default Nexa;
