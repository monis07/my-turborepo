import zod from "zod"

export const details = zod.object({
    email: zod.string(),
    password: zod.string(),
})

export type detailsType = zod.infer<typeof details>

