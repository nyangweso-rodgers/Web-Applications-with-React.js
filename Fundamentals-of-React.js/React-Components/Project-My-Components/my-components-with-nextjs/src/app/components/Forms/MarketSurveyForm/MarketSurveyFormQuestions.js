const questions = [
    {
        id: 1,
        FirstName: 'Rodgers',
        LastName: 'Nyangweso',
        Market: 'A',
    },
    {
        id: 2,
        FirstName: 'Wilson',
        LastName: 'Oyare',
        Market: 'B',
    },
    {
        id: 3,
        FirstName: 'Damaris',
        LastName: 'Awuor',
        Market: 'C',
    },
    {
        id: 4,
        FirstName: 'John',
        LastName: 'Williams',
        Market: 'D',
    }
]

const QuestionLists = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div>
                        {questions.map((q) => (
                            q.FirstName
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionLists;