In React Router Dom v6, navigating with a nested route using the `useNavigate` hook sometimes fails silently if the parent route's component hasn't fully rendered or its state hasn't been updated.  This can happen if the navigation occurs within a lifecycle method like `useEffect` before the parent component has access to the necessary route parameters or data.

```javascript
// Buggy Component
import { useNavigate, useParams } from 'react-router-dom';

function ParentComponent() {
  const { parentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Navigation might fail here if parentId is not yet available
    navigate(`/child/${parentId}`); 
  }, [parentId, navigate]);

  return (
    <div>Parent Component</div>
  );
}
```