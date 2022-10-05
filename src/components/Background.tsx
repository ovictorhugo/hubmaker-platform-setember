export function Background() {
    return  (
        <div className=" max-h-[100vh -56px] w-full flex items-center flex-col justify-center top-0 left-0 z-[-999] overflow-hidden absolute mt-[56px]">
            <div className=" w-[1000%] h-[50vh] bg-bgHub1 bg-repeat-x bg-top bg-bg animate-bgSlideOne "></div>
            <div className=" w-[1000%] h-[50vh] bg-bgHub2 bg-repeat-x bg-top bg-bg animate-bgSlideTwo"></div>
        </div>
    )
}