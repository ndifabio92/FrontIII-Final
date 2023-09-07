type props = {
    error: string
}

export const Error = ({error}: props) => (
    <div style={{ backgroundColor: 'red', marginTop: '10px'}}>
        {error}
    </div>
)