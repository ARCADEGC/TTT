// import MillionLint from "@million/lint";
import type { NextConfig } from "next";
import { withAxiom } from "next-axiom";

const nextConfig: NextConfig = {
    experimental: {
        reactCompiler: true,
    },
};

// export default MillionLint.next({
//     enabled: true,
//     rsc: true,
// })(nextConfig);

const withAxiomConfig = withAxiom(nextConfig);

export default withAxiomConfig;
