module.exports = {
    apps: [
        {
            name: "NextApp",
            script: "npm",
            args: "run start-next",
            cwd: "./",
            interpreter: "node",
            env: {
                NODE_ENV: "production",
            }
        }
    ]
}