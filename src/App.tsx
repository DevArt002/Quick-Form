import React, { ChangeEvent, MouseEvent, useCallback, useState } from 'react';
// Components
import { TextInput, Button, Dropdown, ETextInputTypes } from '@/Components';
// Types
import { TRobotData, ERobotState } from '@/Types';
// Styles
import s from './App.module.scss';

function App() {
  const [robotData, setRobotData] = useState<TRobotData>({
    name: '',
    state: undefined,
    armCount: 0,
    location: '',
  });

  // Listen when form input has changed
  const handleFormChange = useCallback(
    (e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => {
      const { name, value } = e.currentTarget;

      setRobotData({ ...robotData, [name]: value });
    },
    [robotData],
  );

  // Listen when submit button has clicked
  const handleSubmit = useCallback(async () => {
    // TODO Post robot data
    /* try {
      const resp = await axios.post('API/ENDPOINT', robotData)
    } catch (err) {
      console.error('Failed post: ', err);
    } */
    console.info(robotData);
  }, [robotData]);

  return (
    <div className={s.app}>
      <TextInput
        name="name"
        label="Robot name"
        value={robotData.name}
        onChange={handleFormChange}
      />
      <Dropdown
        name="state"
        label="State"
        options={Object.values(ERobotState)}
        value={robotData.state}
        onChange={handleFormChange}
      />
      <TextInput
        name="armCount"
        label="Number of arms"
        type={ETextInputTypes.NUMBER}
        value={robotData.armCount}
        onChange={handleFormChange}
      />
      <TextInput
        name="location"
        label="Location"
        value={robotData.location}
        onChange={handleFormChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

export default App;
