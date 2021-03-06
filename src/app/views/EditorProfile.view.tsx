import DefaultLayout from "../layouts/Default";
import EditorProfile from '../features/EditorProfile.feature';
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

function EditorProfileView() {
    return <DefaultLayout>
        <ErrorBoundary>
            <EditorProfile hidePersonalData={true} />
        </ErrorBoundary>
    </DefaultLayout>
}

export default EditorProfileView;