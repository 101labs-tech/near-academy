// Implement the missing function to display the recent comments

async function getRecentComments(index) {
   const recentComments = await memes[index].get_recent_comments();
}
