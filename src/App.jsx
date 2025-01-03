

function App() {
 

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-slate-800 text-slate-400">
        <div className="flex flex-col">
          <h1>Video Upload Application</h1>
          <video className="w-1/2 h-1/2 " controls>
                <source src="https://my-first-video-storage.s3.ap-south-1.amazonaws.com/WhatsApp+Video+2024-12-08+at+01.13.01.mp4" type="video/mp4"/>
            </video> 
        </div>
        
      </div>
      
    </>
  )
}

export default App
