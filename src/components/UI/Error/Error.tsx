type props = {
    error: string
}

export const Error = ({error}: props) => (
    <div style={{ color: 'red', textAlign: 'center'}}>
        {error}
    </div>
)