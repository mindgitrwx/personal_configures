# run it on mac
echo '{
    "UserKeyMapping":[
        {
            "HIDKeyboardModifierMappingSrc": 0x700000039,
            "HIDKeyboardModifierMappingDst": 0x7000000e0
        }
    ]
}' > ~/caps_to_ctrl.plist
hidutil property --set "$(cat ~/caps_to_ctrl.plist)"

