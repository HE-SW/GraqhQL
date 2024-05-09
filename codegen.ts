import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    generates: {
        // "./front/src/generated/graphql/": {
        //     schema: ["./server/**/*.graphql"],
        //     documents: ["./front/**/*.tsx", "./front/**/*.ts", "!./front/src/generated/**/*"],
        //     hooks: {
        //         afterOneFileWrite: ["prettier --write"],
        //     },
        //     preset: "client",
        //     presetConfig: {
        //         gqlTagName: "gql",
        //     },
        //     config: {
        //         enumsAsTypes: true,
        //     },
        // },
        "./server/src/generated/graphql.ts": {
            hooks: {
                afterOneFileWrite: ["prettier --write"],
            },
            schema: ["./server/**/*.graphql"],
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                typesPrefix: "I",
                enumsAsTypes: true,
                skipTypename: false,
                scalars: {
                    jsonb: "any",
                    JSON: "any",
                },
            },
        },
    },
};

export default config;
