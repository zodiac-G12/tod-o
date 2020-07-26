const sampleTodoData = (id: number, category: string, locale: string) => {
    return [{
        id: id,
        title: "sample title",
        description: "sample description",
        dead_line: new Date( 
                new Date().setDate(
                    new Date().getDate()+7
                )
            ).toLocaleString(locale)
            .split(" ")
            .map((block,idx) => {
                if (idx===0) {
                    return block
                        .split("/")
                        .map(s => {
                            return s.length===1 ? "0"+s : s;
                        } )
                        .join("/");
                } else {
                    return block
                        .split(":")
                        .map(s => {
                            return s.length===1 ? "0"+s : s;
                        } )
                        .join(":");
                }
            } )
            .join(" "),
        degree: "LOW",
        project_id: "",
        completeness: 0,
        category: category,
        created: new Date().toLocaleString(locale)
    }];
};

export default sampleTodoData;
