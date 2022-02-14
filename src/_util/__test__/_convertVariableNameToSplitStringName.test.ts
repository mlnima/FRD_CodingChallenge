import _convertVariableNameToSplitStringName from '../_convertVariableNameToSplitStringName'

describe('convert variable name', () => {
    test('convert variable name to split string name', () => {
        expect(_convertVariableNameToSplitStringName('mockVariableName')).toBe('Mock Variable Name');
    });
});