module.exports = {
    target: 'serverless',
    env: {
        teamRepo: 'grizzlybots11918/ultimategoal',
        teamDefaultBranch: 'master',
        teamBuildWorkflow: '.github/workflows/build.yml',
        upstreamRepo: 'FIRST-Tech-Challenge/FtcRobotController',
        NEXT_PUBLIC_ACCENT: '#ef4b24',
        // color scheme must be one of "orange" | "whiteAlpha" | "blackAlpha" | "gray" | "red" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"
        NEXT_PUBLIC_COLOR_SCHEME: 'orange'
    }
}
