function wait(seconds)
	local _start = os.time()
	local _end = _start+seconds
	while (_end ~= os.time()) do
        --print(os.time())
	end
end

function aaa()
    --wait(2)
    print("1111")
end

function bbb()
    print("222222")
end

function ccc()
    Sleep(1)
    print("CCC3333")
end

function Sleep(n)
   if n > 0 then os.execute("ping -n " .. tonumber(n + 1) .. " localhost > NUL") end
end

ccc()
aaa()
bbb()
