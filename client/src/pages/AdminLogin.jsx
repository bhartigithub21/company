import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, User } from 'lucide-react';
import './Contact.css'; // Reusing styles for consistency

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem('adminToken', data.token);
                navigate('/admin/dashboard');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('Server error');
        }
    };

    return (
        <div className="page-container" style={{ minHeight: '100vh', marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
                className="glass" 
                style={{ padding: '2rem', width: '100%', maxWidth: '400px', borderRadius: '1rem' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <h2 className="text-gradient text-center" style={{ marginBottom: '2rem' }}>Admin Login</h2>
                
                {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{error}</div>}

                <form onSubmit={handleLogin} className="contact-form">
                    <div className="form-group">
                        <label>Username</label>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', top: '15px', left: '10px', color: '#666' }} />
                            <input 
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                style={{ paddingLeft: '35px' }}
                                required 
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', top: '15px', left: '10px', color: '#666' }} />
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                style={{ paddingLeft: '35px' }}
                                required 
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Login</button>
                </form>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
