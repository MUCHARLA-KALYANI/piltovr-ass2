import SignupForm from "../components/SignupForm";
export default function Signup(){
    return(
    <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center">Student Form</h1>
        <SignupForm/>
    </div>
    );
}