import { Component } from "react";

interface State {
    accordionContent: Array<{
        id: number,
        title: string,
        content: string,
        contentVisible: boolean
    }>
}


export class Accordion extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            accordionContent: [
                {
                    id: 1,
                    title: "What is Github and how does it work?",
                    content:
                        "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
                    contentVisible: false
                },
                {
                    id: 2,
                    title: "How do I see GitHub's availability?",
                    content: "Check our real-time status report",
                    contentVisible: false
                },
                {
                    id: 3,
                    title: "Why is GitHub so popular?",
                    content:
                        "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
                    contentVisible: false
                },
            ]
        }
    }

    toggleAccordion(id, event) {
        console.log('selected accordion ', id, event);
        this.setState((prevState) => ({
            accordionContent: prevState.accordionContent.map(content =>
                content.id === id ? {...content, contentVisible: !content.contentVisible} : content
            )
        }))
    }

    render() {
        const {accordionContent} = this.state;
        return (
            <div>
                {
                    accordionContent.map((content: any) => (
                        <div key={content.id}>
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-4x1 font-bold">{content?.title}</h3>
                                    <svg onClick={(event) => this.toggleAccordion(content?.id, event)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                                {content.contentVisible &&
                                    <div>
                                        <p>{content?.content}</p>
                                    </div>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}