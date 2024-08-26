import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProjectLeader = () => {
    return (
        <div className="md:flex items-center mb-6">
            <div className="lg:w-1/2">
                <PhotoProvider>
                    <PhotoView src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvZHlidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D">
                        <img className=' w-full' src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvZHlidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className="lg:w-1/2 space-y-3 m-6">
                <h3 className="text-2xl font-semibold">Project Leader</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lobortis augue. Nam tempus auctor odio ut aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                <button className="btn btn-secondary">Click me</button>
            </div>
        </div>
    );
};

export default ProjectLeader;