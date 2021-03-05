@nearBindgen
export class Comment {
    created_at: Timestamp = context.blockTimestamp;
    author: AccountId = context.predecessor;

    constructor(public text: string) { }
}

const comments = new Vector < Comment > ("c");
// seems like there are three bugs in this function
static add_comment(text: i32): string {
    comments.push(new Comment());
}
